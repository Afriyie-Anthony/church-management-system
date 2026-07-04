import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';

const financeData = [
  { name: 'Jan', tithes: 4000, offering: 2400 },
  { name: 'Feb', tithes: 3000, offering: 1398 },
  { name: 'Mar', tithes: 2000, offering: 9800 },
  { name: 'Apr', tithes: 2780, offering: 3908 },
  { name: 'May', tithes: 1890, offering: 4800 },
  { name: 'Jun', tithes: 2390, offering: 3800 },
  { name: 'Jul', tithes: 3490, offering: 4300 },
];

const attendanceData = [
  { name: 'Week 1', attendance: 320 },
  { name: 'Week 2', attendance: 350 },
  { name: 'Week 3', attendance: 310 },
  { name: 'Week 4', attendance: 400 },
];

const demographicsData = [
  { name: 'Youth', value: 120 },
  { name: 'Women', value: 150 },
  { name: 'Men', value: 100 },
  { name: 'Children', value: 80 },
];

const COLORS = ['#4f46e5', '#ec4899', '#3b82f6', '#10b981'];

export default function Reports() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <section className="flex h-screen overflow-hidden bg-gray-50 font-sans">
      {/* Sidebar */}
      <div className={`sidebar bg-indigo-800 text-white flex flex-col ${sidebarOpen ? 'w-64' : 'collapsed'} transition-all duration-300`}>
        <div className="p-4 flex items-center space-x-3 border-b border-indigo-700">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img src="/images.png" alt="Church Logo" className="w-full h-full object-cover" />
          </div>
          <span className="logo-text text-md font-bold whitespace-nowrap">Church of Pentecost</span>
        </div>

        <div className="p-4 flex items-center space-x-3 border-b border-indigo-700">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
            <i className="fas fa-user text-white"></i>
          </div>
          <div className="overflow-hidden">
            <div className="sidebar-text font-medium truncate">Admin User</div>
            <div className="sidebar-text text-xs text-indigo-200 truncate">Administrator</div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-2">
          <Link to="/dashboard" className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1">
            <i className="fas fa-tachometer-alt"></i>
            <span className="sidebar-text">Dashboard</span>
          </Link>
          <Link to="/members" className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1">
            <i className="fas fa-users"></i>
            <span className="sidebar-text">Members</span>
          </Link>
          <Link to="/events" className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1">
            <i className="fas fa-calendar-alt"></i>
            <span className="sidebar-text">Events</span>
          </Link>
          <Link to="/finance" className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1">
            <i className="fas fa-wallet"></i>
            <span className="sidebar-text">Finance</span>
          </Link>
          <Link to="/ministries" className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1">
            <i className="fas fa-church"></i>
            <span className="sidebar-text">Ministries</span>
          </Link>
          <Link to="/reports" className="nav-item flex items-center space-x-3 p-3 rounded-lg bg-indigo-700 mb-1 active-nav">
            <i className="fas fa-file-alt"></i>
            <span className="sidebar-text">Reports</span>
          </Link>
          <a href="#" className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1">
            <i className="fas fa-cog"></i>
            <span className="sidebar-text">Settings</span>
          </a>
        </nav>

        <div className="p-4 border-t border-indigo-700">
          <a href="#" onClick={handleLogout} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-indigo-700 w-full">
            <i className="fas fa-sign-out-alt"></i>
            <span className="sidebar-text">Logout</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 right-0 w-full z-10">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 hover:text-gray-900 transition-colors">
              <i className="fas fa-bars text-xl"></i>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Reports & Analytics</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <i className="fas fa-bell text-gray-600"></i>
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
              </button>
            </div>
            <div className="dropdown relative">
              <button className="flex items-center space-x-2 focus:outline-none hover:bg-gray-50 p-1.5 rounded-lg transition-colors">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <i className="fas fa-user text-indigo-600"></i>
                </div>
                <span className="hidden md:inline-block font-medium text-gray-700">Admin</span>
                <i className="fas fa-chevron-down text-xs text-gray-400"></i>
              </button>
            </div>
          </div>
        </header>

        <div className="px-4 md:px-8 py-6 max-w-7xl mx-auto space-y-6 md:space-y-8">
          {/* Header */}
          <div className="mb-2">
            <h2 className="text-2xl font-bold text-gray-800">Church Performance</h2>
            <p className="text-gray-500 text-sm mt-1">Detailed visual analytics of growth and finances.</p>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-xl flex-shrink-0">
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Revenue (YTD)</p>
                <h3 className="text-2xl font-bold text-gray-800">₵124,500</h3>
                <p className="text-green-500 text-xs mt-1 font-medium"><i className="fas fa-arrow-up mr-1"></i>12% from last year</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
              <div className="bg-green-100 text-green-600 p-4 rounded-xl flex-shrink-0">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Avg. Attendance</p>
                <h3 className="text-2xl font-bold text-gray-800">345</h3>
                <p className="text-green-500 text-xs mt-1 font-medium"><i className="fas fa-arrow-up mr-1"></i>5% from last month</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
              <div className="bg-pink-100 text-pink-600 p-4 rounded-xl flex-shrink-0">
                <i className="fas fa-user-plus text-2xl"></i>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">New Members (YTD)</p>
                <h3 className="text-2xl font-bold text-gray-800">42</h3>
                <p className="text-green-500 text-xs mt-1 font-medium"><i className="fas fa-arrow-up mr-1"></i>8% from last year</p>
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Finance Line Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-800">Financial Trends</h3>
                <select className="text-sm border-gray-200 rounded-lg text-gray-500 focus:ring-indigo-500">
                  <option>Last 6 Months</option>
                  <option>This Year</option>
                </select>
              </div>
              <div className="w-full">
                <ResponsiveContainer width="99%" height={320}>
                  <LineChart data={financeData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} tickFormatter={(value) => `₵${value}`} dx={-10} />
                    <RechartsTooltip 
                      contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                      formatter={(value) => [`₵${value}`, '']}
                    />
                    <Legend iconType="circle" wrapperStyle={{paddingTop: '20px'}} />
                    <Line type="monotone" dataKey="tithes" stroke="#4f46e5" strokeWidth={3} dot={{r: 4, strokeWidth: 2}} activeDot={{r: 6}} name="Tithes" />
                    <Line type="monotone" dataKey="offering" stroke="#10b981" strokeWidth={3} dot={{r: 4, strokeWidth: 2}} activeDot={{r: 6}} name="Offering" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Attendance Bar Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-800">Monthly Attendance</h3>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-800">View Full List</button>
              </div>
              <div className="w-full">
                <ResponsiveContainer width="99%" height={320}>
                  <BarChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dx={-10} />
                    <RechartsTooltip 
                      cursor={{fill: '#f3f4f6'}} 
                      contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                    />
                    <Bar dataKey="attendance" fill="#3b82f6" radius={[6, 6, 0, 0]} name="Attendees" barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Demographics Pie Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Ministry Demographics</h3>
              <p className="text-gray-500 text-sm mb-6">Breakdown of member participation across different ministries.</p>
              
              <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 flex justify-center">
                  <ResponsiveContainer width="99%" height={320}>
                    <PieChart>
                      <Pie
                        data={demographicsData}
                        cx="50%"
                        cy="50%"
                        innerRadius={90}
                        outerRadius={130}
                        paddingAngle={5}
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {demographicsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <RechartsTooltip 
                        contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Custom Legend/Details next to Pie Chart */}
                <div className="w-full md:w-1/3 mt-8 md:mt-0 space-y-4">
                  {demographicsData.map((entry, index) => (
                    <div key={entry.name} className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full" style={{backgroundColor: COLORS[index % COLORS.length]}}></div>
                        <span className="font-medium text-gray-700">{entry.name}</span>
                      </div>
                      <span className="font-bold text-gray-900">{entry.value} Members</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
