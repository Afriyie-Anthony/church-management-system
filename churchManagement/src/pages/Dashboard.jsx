import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <section className="flex h-screen overflow-hidden bg-gray-100 font-sans">
      {/* side bar */}
      <div className={`sidebar bg-indigo-800 text-white flex flex-col ${sidebarOpen ? 'w-64' : 'collapsed'}`}>
        <div className="p-4 flex items-center space-x-3 border-b border-indigo-700">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <img
              src="/images.png"
              alt="Church of Pentecost Logo"
              className="w-full rounded-full object-cover"
            />
          </div>
          <span className="logo-text text-md font-bold">Church of Pentecost</span>
        </div>

        <div className="p-4 flex items-center space-x-3 border-b border-indigo-700">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
            <i className="fas fa-user text-white"></i>
          </div>
          <div>
            <div className="sidebar-text font-medium">Admin User</div>
            <div className="sidebar-text text-xs text-indigo-200">
              Administrator
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-2">
          <Link
            to="/dashboard"
            className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1 active-nav"
          >
            <i className="fas fa-tachometer-alt"></i>
            <span className="sidebar-text">Dashboard</span>
          </Link>
          <Link
            to="/members"
            className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1"
          >
            <i className="fas fa-users"></i>
            <span className="sidebar-text">Members</span>
          </Link>
          <Link
            to="/events"
            className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1"
          >
            <i className="fas fa-calendar-alt"></i>
            <span className="sidebar-text">Events</span>
          </Link>
          <Link
            to="/finance"
            className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1"
          >
            <i className="fas fa-wallet"></i>
            <span className="sidebar-text">Finance</span>
          </Link>
          <Link
            to="/ministries"
            className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1"
          >
            <i className="fas fa-church"></i>
            <span className="sidebar-text">Ministries</span>
          </Link>
          <Link to="/reports" className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1">
            <i className="fas fa-file-alt"></i>
            <span className="sidebar-text">Reports</span>
          </Link>
          <a
            href="#"
            className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1"
          >
            <i className="fas fa-cog"></i>
            <span className="sidebar-text">Settings</span>
          </a>
        </nav>

        <div className="p-4 border-t border-indigo-700">
          <a
            href="#"
            onClick={handleLogout}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-indigo-700 w-full"
          >
            <i className="fas fa-sign-out-alt"></i>
            <span className="sidebar-text">Logout</span>
          </a>
        </div>
      </div>

      {/* main content */}
      <main className="flex-1 overflow-auto">
        {/* Top Navigation bar */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 right-0 w-full z-50">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <i className="fas fa-bell text-gray-600"></i>
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
            <div className="dropdown relative">
              <button className="flex items-center space-x-2 focus:outline-none">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <i className="fas fa-user text-indigo-600"></i>
                </div>
                <span className="hidden md:inline-block">Admin</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              <div className="dropdown-content mt-2 py-1 right-0 w-48 bg-white shadow-lg rounded-md border border-gray-100">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            </div>
          </div>
        </header>

        {/* introduction section */}
        <div className="px-10 py-6">
          <h1 className="text-2xl font-bold tracking-wide">
            Welcome, Pastor Anthony
          </h1>
          <p className="text-gray-600">Here's what's happening at your church</p>
        </div>

        {/* summary cards */}
        <div id="dashboard-content" className="px-3 py-6">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <i className="fas fa-users text-xl"></i>
              </div>
              <div>
                <p className="text-gray-500">Total Members</p>
                <p className="text-2xl font-bold">1,245</p>
                <p className="text-green-500 text-sm">
                  <i className="fas fa-arrow-up"></i> 5.2% from last month
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-2">
                <i className="fas fa-donate text-xl"></i>
              </div>
              <div>
                <p className="text-gray-500">This Month's Finance</p>
                <p className="text-2xl font-bold">₵24,580</p>
                <p className="text-green-500 text-sm">
                  <i className="fas fa-arrow-up"></i> 12.7% from last month
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-2">
                <i className="fas fa-calendar-check text-xl"></i>
              </div>
              <div>
                <p className="text-gray-500">Upcoming Events</p>
                <p className="text-2xl font-bold">8</p>
                <p className="text-blue-500 text-sm">Next: Sunday Service</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-2">
                <i className="fas fa-praying-hands text-xl"></i>
              </div>
              <div>
                <p className="text-gray-500">Active Groups</p>
                <p className="text-2xl font-bold">14</p>
                <p className="text-green-500 text-sm">3 new groups this month</p>
              </div>
            </div>
          </div>

          {/* quick actions and upcoming events */}
          <div className="flex flex-col lg:flex-row gap-3 mb-5">
            {/* quick actions */}
            <div className="flex-[1.5] bg-white rounded-lg shadow p-4">
              <p className="text-lg font-semibold">Quick Actions</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-4">
                {/* members */}
                <a href="#" className="shadow-sm p-4 rounded-lg hover:shadow-xl transition-all">
                  <div>
                    <i className="fas fa-users text-lg bg-[#3b82f6] text-white rounded-xl px-2 py-3 text-center"></i>
                    <h1 className="text-md font-semibold py-2">Members Management</h1>
                    <p className="text-slate-400 font-light">Manage members profiles, groups, and more</p>
                  </div>
                </a>

                {/* Events */}
                <a href="#" className="shadow-sm p-4 rounded-lg hover:shadow-xl transition-all">
                  <div>
                    <i className="fas fa-calendar-check text-lg bg-[#22c55d] text-white rounded-xl px-3 py-3 text-center"></i>
                    <h1 className="text-md font-semibold py-2">Events</h1>
                    <p className="text-slate-400 font-light">Schedule and manage church events</p>
                  </div>
                </a>

                {/* Donations */}
                <a href="#" className="shadow-sm p-4 rounded-lg hover:shadow-xl transition-all">
                  <div>
                    <i className="fas fa-donate text-lg bg-[#f59e0b] text-white rounded-xl px-3 py-3 text-center"></i>
                    <h1 className="text-md font-semibold py-2">Donations</h1>
                    <p className="text-slate-400 font-light">Manage donations and donations reports</p>
                  </div>
                </a>

                {/* Communication */}
                <a href="#" className="shadow-sm p-4 rounded-lg hover:shadow-xl transition-all">
                  <div>
                    <i className="fas fa-bullhorn text-lg bg-purple-500 text-white rounded-xl px-3 py-3 text-center"></i>
                    <h1 className="text-md font-semibold py-2">Communication</h1>
                    <p className="text-slate-400 font-light">Send announcements, emails and SMS to members</p>
                  </div>
                </a>

                {/* Groups and ministries */}
                <a href="#" className="shadow-sm p-4 rounded-lg hover:shadow-xl transition-all">
                  <div>
                    <i className="fas fa-layer-group text-lg bg-indigo-500 text-white rounded-xl px-2 py-3 text-center"></i>
                    <h1 className="text-md font-semibold py-2">Groups & ministries</h1>
                    <p className="text-slate-400 font-light">Organize church ministries and small groups</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="flex-[0.7] bg-white rounded-lg shadow h-[60vh]">
              <p className="text-lg font-semibold px-5 pt-5">Upcoming Events</p>
              <p className="text-gray-400 px-5">Schedule for the week</p>
              {/* Events Container */}
              <div className="border-none"></div>
            </div>
          </div>

          {/* Recent Members */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Members</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Group</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
                          <div className="text-sm text-gray-500">sarah@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 15, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Women's Bible Study</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/42.jpg" alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Michael Brown</div>
                          <div className="text-sm text-gray-500">michael@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 14, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Men's Fellowship</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/33.jpg" alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Emily Davis</div>
                          <div className="text-sm text-gray-500">emily@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 12, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Youth Group</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
