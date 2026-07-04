import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const mockEvents = [
  {
    id: 1,
    name: 'Sunday Service',
    type: 'Weekly Gathering',
    dateStr: 'Oct 15, 2023',
    timeStr: '09:00 AM - 12:00 PM',
    location: 'Main Auditorium',
    status: 'Upcoming',
    organizer: 'Church Admin',
    month: 'OCT',
    day: '15',
    color: 'indigo'
  },
  {
    id: 2,
    name: 'Mid-Week Teaching',
    type: 'Bible Study',
    dateStr: 'Oct 18, 2023',
    timeStr: '06:30 PM - 08:30 PM',
    location: 'Youth Hall',
    status: 'Upcoming',
    organizer: 'Pastor John',
    month: 'OCT',
    day: '18',
    color: 'purple'
  },
  {
    id: 3,
    name: 'Community Outreach',
    type: 'Evangelism',
    dateStr: 'Oct 21, 2023',
    timeStr: '08:00 AM - 02:00 PM',
    location: 'Downtown Square',
    status: 'Planning',
    organizer: 'Evangelism Team',
    month: 'OCT',
    day: '21',
    color: 'green'
  },
  {
    id: 4,
    name: 'Youth Night',
    type: 'Special Program',
    dateStr: 'Sep 28, 2023',
    timeStr: '05:00 PM - 09:00 PM',
    location: 'Youth Hall',
    status: 'Completed',
    organizer: 'Youth Ministry',
    month: 'SEP',
    day: '28',
    color: 'gray'
  }
];

export default function Events() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  
  const [selectedEvent, setSelectedEvent] = useState(null);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const openViewModal = (event) => {
    setSelectedEvent(event);
    setViewModalOpen(true);
  };

  const openEditModal = (event) => {
    setSelectedEvent(event);
    setEditModalOpen(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
            className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1"
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
            className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1 active-nav"
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
        <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 right-0 w-full z-50">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Events Management</h1>
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

        <div className="px-6 py-3">
          {/* Action Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-2 md:space-y-0 mt-4">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>

            <div className="flex space-x-3 w-full md:w-auto">
              <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                <i className="fas fa-filter"></i>
                <span>Filters</span>
              </button>
              <button
                onClick={() => setAddModalOpen(true)}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <i className="fas fa-plus"></i>
                <span>Add Event</span>
              </button>
            </div>
          </div>

          {/* statistic cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Total Events</p>
                  <h3 className="text-2xl font-bold">142</h3>
                </div>
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <i className="fas fa-calendar-alt text-xl"></i>
                </div>
              </div>
              <p className="text-green-500 text-sm mt-2">
                <i className="fas fa-arrow-up"></i> 4% from last month
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Upcoming</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <i className="fas fa-calendar-check text-xl"></i>
                </div>
              </div>
              <p className="text-green-500 text-sm mt-2">
                <i className="fas fa-arrow-up"></i> 2 new this week
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Completed</p>
                  <h3 className="text-2xl font-bold">130</h3>
                </div>
                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                  <i className="fas fa-calendar-minus text-xl"></i>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Year to date
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Avg. Attendance</p>
                  <h3 className="text-2xl font-bold">450</h3>
                </div>
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <i className="fas fa-users text-xl"></i>
                </div>
              </div>
              <p className="text-green-500 text-sm mt-2">
                <i className="fas fa-arrow-up"></i> 8% from last month
              </p>
            </div>
          </div>

          {/* Events Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold text-lg">Upcoming Events</h3>
              <div className="flex space-x-2">
                <select className="border rounded px-3 py-1 text-sm">
                  <option>All Events</option>
                  <option>Upcoming</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
                <button className="p-1 rounded hover:bg-gray-100">
                  <i className="fas fa-download text-gray-600"></i>
                </button>
                <button className="p-1 rounded hover:bg-gray-100">
                  <i className="fas fa-print text-gray-600"></i>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organizer</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockEvents.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 h-10 w-10 bg-${event.color}-100 text-${event.color}-600 rounded-lg flex items-center justify-center font-semibold text-xs flex-col`}>
                            <span>{event.month}</span>
                            <span>{event.day}</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{event.name}</div>
                            <div className="text-sm text-gray-500">{event.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{event.dateStr}</div>
                        <div className="text-sm text-gray-500">{event.timeStr}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.organizer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button onClick={() => openViewModal(event)} className="text-indigo-600 hover:text-indigo-900"><i className="fas fa-eye"></i></button>
                          <button onClick={() => openEditModal(event)} className="text-yellow-600 hover:text-yellow-900"><i className="fas fa-edit"></i></button>
                          <button className="text-red-600 hover:text-red-900"><i className="fas fa-trash"></i></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{mockEvents.length}</span> of <span className="font-medium">12</span> upcoming events
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">Previous</button>
                <button className="px-3 py-1 border rounded bg-indigo-600 text-white text-sm hover:bg-indigo-700">1</button>
                <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">2</button>
                <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add Event Modal */}
      {addModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setAddModalOpen(false);
            }
          }}
        >
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-auto overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-4 py-3 border-b flex justify-between items-center bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800">Add New Event</h3>
              <button onClick={() => setAddModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
                  <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Sunday Service" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                    <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Service</option>
                      <option>Bible Study</option>
                      <option>Outreach</option>
                      <option>Meeting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organizer</label>
                    <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Church Admin</option>
                      <option>Youth Ministry</option>
                      <option>Women's Ministry</option>
                      <option>Men's Ministry</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date & Time</label>
                    <input type="datetime-local" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date & Time</label>
                    <input type="datetime-local" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Main Auditorium" />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea rows="3" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Event details..."></textarea>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Image</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 transition cursor-pointer relative">
                    <div className="space-y-1 text-center flex flex-col items-center">
                      <i className="fas fa-cloud-upload-alt text-gray-400 text-3xl mb-2"></i>
                      <div className="flex text-sm text-gray-600 justify-center">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t">
                  <button type="button" onClick={() => setAddModalOpen(false)} className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Save Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* View Event Modal */}
      {viewModalOpen && selectedEvent && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setViewModalOpen(false);
            }
          }}
        >
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto overflow-hidden">
            <div className="relative h-48 bg-indigo-600">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button onClick={() => setViewModalOpen(false)} className="absolute top-4 right-4 text-white hover:text-gray-200 bg-black/20 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                <i className="fas fa-times"></i>
              </button>
              <div className="absolute bottom-4 left-6 text-white">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full mb-2 inline-block ${getStatusColor(selectedEvent.status)} bg-opacity-90`}>
                  {selectedEvent.status}
                </span>
                <h3 className="text-2xl font-bold">{selectedEvent.name}</h3>
                <p className="text-indigo-100 text-sm mt-1">{selectedEvent.type}</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-indigo-100 p-2 rounded-full text-indigo-600">
                    <i className="fas fa-calendar-alt w-5 text-center"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Date & Time</h4>
                    <p className="text-gray-900">{selectedEvent.dateStr}</p>
                    <p className="text-gray-600 text-sm">{selectedEvent.timeStr}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-green-100 p-2 rounded-full text-green-600">
                    <i className="fas fa-map-marker-alt w-5 text-center"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Location</h4>
                    <p className="text-gray-900">{selectedEvent.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-purple-100 p-2 rounded-full text-purple-600">
                    <i className="fas fa-user-tie w-5 text-center"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Organizer</h4>
                    <p className="text-gray-900">{selectedEvent.organizer}</p>
                  </div>
                </div>
                
                <hr className="my-4 border-gray-100" />
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Description</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Join us for the {selectedEvent.name}, a {selectedEvent.type.toLowerCase()} organized by {selectedEvent.organizer}. It will be taking place at {selectedEvent.location}. All are welcome to attend!
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button onClick={() => { setViewModalOpen(false); openEditModal(selectedEvent); }} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition mr-2">
                  <i className="fas fa-edit mr-2"></i> Edit Event
                </button>
                <button onClick={() => setViewModalOpen(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Event Modal */}
      {editModalOpen && selectedEvent && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setEditModalOpen(false);
            }
          }}
        >
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-auto overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-4 py-3 border-b flex justify-between items-center bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800">Edit Event</h3>
              <button onClick={() => setEditModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
                  <input type="text" defaultValue={selectedEvent.name} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                    <select defaultValue={selectedEvent.type} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Weekly Gathering</option>
                      <option>Service</option>
                      <option>Bible Study</option>
                      <option>Evangelism</option>
                      <option>Special Program</option>
                      <option>Meeting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organizer</label>
                    <select defaultValue={selectedEvent.organizer} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Church Admin</option>
                      <option>Pastor John</option>
                      <option>Youth Ministry</option>
                      <option>Women's Ministry</option>
                      <option>Men's Ministry</option>
                      <option>Evangelism Team</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date & Time</label>
                    {/* Simplified for mock purposes */}
                    <input type="text" defaultValue={`${selectedEvent.dateStr} ${selectedEvent.timeStr.split(' - ')[0]}`} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date & Time</label>
                    <input type="text" defaultValue={`${selectedEvent.dateStr} ${selectedEvent.timeStr.split(' - ')[1] || ''}`} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input type="text" defaultValue={selectedEvent.location} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select defaultValue={selectedEvent.status} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Upcoming</option>
                      <option>Planning</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Image</label>
                  <div className="flex items-center space-x-4">
                    <div className="h-20 w-32 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-400 border border-indigo-200">
                      <i className="fas fa-image text-2xl"></i>
                    </div>
                    <div className="flex-1">
                      <label className="relative cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 inline-block">
                        <span>Change Image</span>
                        <input type="file" className="sr-only" accept="image/*" />
                      </label>
                      <p className="mt-1 text-xs text-gray-500">Replace current cover image.</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t">
                  <button type="button" onClick={() => setEditModalOpen(false)} className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                    Update Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
