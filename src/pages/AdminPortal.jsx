import { useEffect, useState } from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { Search, Calendar, Phone, User, Activity, RefreshCw } from 'lucide-react';

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRequests = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('adminToken');
    if (!token) {
      setIsAuthenticated(false);
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch('https://elevatebackend-hr4n.onrender.com/api/requests', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
        throw new Error('Session expired. Please log in again.');
      }
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setRequests(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Could not establish connection to the backend server. Make sure MongoDB and backend are running.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchRequests();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');
    
    try {
      const response = await fetch('https://elevatebackend-hr4n.onrender.com/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success && data.token) {
        localStorage.setItem('adminToken', data.token);
        setIsAuthenticated(true);
        setLoginError('');
      } else {
        setLoginError(data.error || 'Invalid username or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setLoginError('Could not connect to server. Ensure backend is running.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-32 pb-24 bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-md">
          <FadeIn>
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl mx-auto flex items-center justify-center mb-6">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-outfit font-bold text-slate-900">Admin Login</h1>
                <p className="text-slate-500 mt-2">Enter your credentials to manage requests</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    placeholder="Enter username"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    placeholder="Enter password"
                  />
                </div>

                {loginError && (
                  <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl font-medium text-center border border-red-100">
                    {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className={`w-full bg-slate-900 hover:bg-amber-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-md flex justify-center items-center ${isLoggingIn ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl hover:shadow-amber-500/20 transform hover:-translate-y-1'}`}
                >
                  {isLoggingIn ? 'Logging in...' : 'Log In'}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-outfit font-bold text-slate-900">Admin Portal</h1>
              <p className="text-slate-500 mt-1">Manage incoming service requests</p>
            </div>
            <button 
              onClick={fetchRequests}
              disabled={isLoading}
              className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium text-sm shadow-sm hover:bg-slate-50 transition flex items-center gap-2 group"
            >
              <RefreshCw className={`w-4 h-4 text-slate-500 group-hover:text-amber-500 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button 
              onClick={() => {
                localStorage.removeItem('adminToken');
                setIsAuthenticated(false);
              }}
              className="px-5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-700 font-medium text-sm hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition"
            >
              Logout
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-8 flex items-start gap-4">
              <Activity className="w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold">Backend Connection Error</h4>
                <p className="text-sm mt-1 opacity-90">{error}</p>
                <p className="text-xs mt-2 opacity-75">Did you run `npm run dev` in the backend folder and start MongoDB?</p>
              </div>
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="py-5 px-6 font-semibold text-slate-700 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-slate-400" />
                        Client Name
                      </div>
                    </th>
                    <th className="py-5 px-6 font-semibold text-slate-700 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-slate-400" />
                        Phone Number
                      </div>
                    </th>
                    <th className="py-5 px-6 font-semibold text-slate-700 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-slate-400" />
                        Service Requested
                      </div>
                    </th>
                    <th className="py-5 px-6 font-semibold text-slate-700 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        Date & Time
                      </div>
                    </th>
                    <th className="py-5 px-6 font-semibold text-slate-700 text-sm whitespace-nowrap text-center">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {isLoading ? (
                    <tr>
                      <td colSpan="5" className="py-12 text-center text-slate-500">
                        <div className="flex items-center justify-center gap-3">
                          <RefreshCw className="w-5 h-5 animate-spin text-amber-500" />
                          Loading requests...
                        </div>
                      </td>
                    </tr>
                  ) : requests.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="py-12 text-center text-slate-500">
                        <div className="flex flex-col items-center justify-center">
                          <Search className="w-10 h-10 text-slate-300 mb-3" />
                          <p>No service requests found yet.</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    requests.map((request) => (
                      <tr key={request._id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6">
                          <span className="font-semibold text-slate-900">{request.name}</span>
                        </td>
                        <td className="py-4 px-6 text-slate-600">
                          {request.phone}
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                            {request.serviceName}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-sm text-slate-500 whitespace-nowrap">
                          {formatDate(request.createdAt)}
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                            {request.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
