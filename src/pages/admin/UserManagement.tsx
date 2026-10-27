import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { 
  Search,
  Users,
  User,
  Mail,
  Calendar,
  Shield,
  Eye,
  // Edit,
  Ban,
  CheckCircle,
  // XCircle
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

interface UserData {
  _id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  avatar: string | null;
  isActive: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export function UserManagement() {
  const { token } = useAuth();
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://simeck-website-backen.vercel.app/api/users', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleUserStatus = async (userId: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`https://simeck-website-backen.vercel.app/api/users/${userId}/toggle-status`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isActive: !currentStatus })
      });

      if (response.ok) {
        setUsers(users.map(user => 
          user._id === userId 
            ? { ...user, isActive: !currentStatus }
            : user
        ));
      }
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-500';
      case 'moderator':
        return 'bg-orange-500';
      case 'user':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.lastName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = !filterRole || user.role === filterRole;
    const matchesStatus = !filterStatus || 
                         (filterStatus === "active" && user.isActive) ||
                         (filterStatus === "inactive" && !user.isActive);
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const roles = Array.from(new Set(users.map(user => user.role)));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl text-white font-bold">User Management</h1>
          <p className="text-gray-600 mt-2">Manage user accounts and permissions</p>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-2 border-purple-200 focus:border-purple-400"
              />
            </div>
            
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="border-2 border-purple-200 focus:border-purple-400 rounded-md px-3 py-2"
            >
              <option value="">All Roles</option>
              {roles.map(role => (
                <option key={role} value={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</option>
              ))}
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border-2 border-purple-200 focus:border-purple-400 rounded-md px-3 py-2"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* User List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading users...</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredUsers.length === 0 ? (
            <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="text-center py-12">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl text-gray-600 mb-2">No users found</h3>
                <p className="text-gray-500">
                  {searchTerm || filterRole || filterStatus 
                    ? "Try adjusting your search or filters" 
                    : "No users are registered yet"}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredUsers.map((user) => (
              <Card key={user._id} className="border-4 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-102 bg-gradient-to-br from-white to-purple-50">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center">
                        {user.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user.username}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        ) : (
                          <User className="w-8 h-8" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-purple-800">
                            {user.firstName} {user.lastName}
                          </h3>
                          <Badge className={`${user.isActive ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                            {user.isActive ? 'Active' : 'Inactive'}
                          </Badge>
                        </div>
                        
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            {user.email}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            Joined {new Date(user.createdAt).toLocaleDateString()}
                          </div>
                        </div>

                        {user.bio && (
                          <p className="text-gray-600 mt-2 text-sm line-clamp-2">{user.bio}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Badge className={`${getRoleColor(user.role)} text-white`}>
                          <Shield className="w-3 h-3 mr-1" />
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`${user.isActive 
                            ? 'text-red-600 hover:bg-red-100' 
                            : 'text-green-600 hover:bg-green-100'
                          }`}
                          onClick={() => toggleUserStatus(user._id, user.isActive)}
                        >
                          {user.isActive ? (
                            <>
                              <Ban className="w-4 h-4 mr-1" />
                              Deactivate
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Activate
                            </>
                          )}
                        </Button>
                        
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
          <CardContent className="text-center p-6">
            <div className="text-3xl font-bold text-purple-800 mb-2">{users.length}</div>
            <div className="text-gray-600">Total Users</div>
          </CardContent>
        </Card>
        
        <Card className="border-4 border-green-200 bg-gradient-to-br from-white to-green-50">
          <CardContent className="text-center p-6">
            <div className="text-3xl font-bold text-green-800 mb-2">
              {users.filter(user => user.isActive).length}
            </div>
            <div className="text-gray-600">Active Users</div>
          </CardContent>
        </Card>
        
        <Card className="border-4 border-red-200 bg-gradient-to-br from-white to-red-50">
          <CardContent className="text-center p-6">
            <div className="text-3xl font-bold text-red-800 mb-2">
              {users.filter(user => user.role === 'admin').length}
            </div>
            <div className="text-gray-600">Admins</div>
          </CardContent>
        </Card>
        
        <Card className="border-4 border-blue-200 bg-gradient-to-br from-white to-blue-50">
          <CardContent className="text-center p-6">
            <div className="text-3xl font-bold text-blue-800 mb-2">
              {users.filter(user => user.role === 'user').length}
            </div>
            <div className="text-gray-600">Regular Users</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
