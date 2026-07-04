import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const mockMembers = [
  {
    id: 1,
    initials: 'JD',
    name: 'John Doe',
    memberId: 'GC-1001',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    status: 'Active',
    ministry: "Worship Team, Men's Ministry",
    joinDate: 'Jan 15, 2020',
    color: 'indigo',
    address: { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' },
    dob: '1985-05-15',
    gender: 'Male'
  },
  {
    id: 2,
    initials: 'SJ',
    name: 'Sarah Johnson',
    memberId: 'GC-1002',
    email: 'sarah.j@example.com',
    phone: '(555) 987-6543',
    status: 'Active',
    ministry: "Children's Ministry",
    joinDate: 'Mar 22, 2019',
    color: 'indigo',
    address: { street: '456 Oak Ave', city: 'Somewhere', state: 'TX', zip: '75001' },
    dob: '1990-08-22',
    gender: 'Female'
  },
  {
    id: 3,
    initials: 'MB',
    name: 'Michael Brown',
    memberId: 'GC-1003',
    email: 'michael.b@example.com',
    phone: '(555) 456-7890',
    status: 'New',
    ministry: 'Not Assigned',
    joinDate: 'Jun 5, 2023',
    color: 'indigo',
    address: { street: '789 Pine Rd', city: 'Nowhere', state: 'FL', zip: '33101' },
    dob: '1982-11-03',
    gender: 'Male'
  },
  {
    id: 4,
    initials: 'EW',
    name: 'Emily Wilson',
    memberId: 'GC-1004',
    email: 'emily.w@example.com',
    phone: '(555) 789-0123',
    status: 'Inactive',
    ministry: "Women's Ministry",
    joinDate: 'Aug 12, 2021',
    color: 'indigo',
    address: { street: '321 Elm St', city: 'Elsewhere', state: 'NY', zip: '10001' },
    dob: '1975-02-14',
    gender: 'Female'
  },
  {
    id: 5,
    initials: 'RM',
    name: 'Robert Miller',
    memberId: 'GC-1005',
    email: 'robert.m@example.com',
    phone: '(555) 234-5678',
    status: 'Active',
    ministry: "Outreach, Men's Ministry",
    joinDate: 'Nov 30, 2018',
    color: 'indigo',
    address: { street: '654 Cedar Ln', city: 'Anyplace', state: 'WA', zip: '98001' },
    dob: '1968-07-09',
    gender: 'Male'
  }
];

export default function Members() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  
  const [selectedMember, setSelectedMember] = useState(null);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const openViewModal = (member) => {
    setSelectedMember(member);
    setViewModalOpen(true);
  };

  const openEditModal = (member) => {
    setSelectedMember(member);
    setEditModalOpen(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-yellow-100 text-yellow-800';
      case 'New': return 'bg-purple-100 text-purple-800';
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
            className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1 active-nav"
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
          <a
            href="#"
            className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1"
          >
            <i className="fas fa-file-alt"></i>
            <span className="sidebar-text">Reports</span>
          </a>
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
            <h1 className="text-2xl font-bold text-gray-800">Members Management</h1>
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
                placeholder="Search members..."
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
                <span>Add Member</span>
              </button>
            </div>
          </div>

          {/* statistic cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Total Members</p>
                  <h3 className="text-2xl font-bold">1,248</h3>
                </div>
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <i className="fas fa-users text-xl"></i>
                </div>
              </div>
              <p className="text-green-500 text-sm mt-2">
                <i className="fas fa-arrow-up"></i> 12% from last month
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Active Members</p>
                  <h3 className="text-2xl font-bold">892</h3>
                </div>
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <i className="fas fa-user-check text-xl"></i>
                </div>
              </div>
              <p className="text-green-500 text-sm mt-2">
                <i className="fas fa-arrow-up"></i> 8% from last month
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">New This Month</p>
                  <h3 className="text-2xl font-bold">42</h3>
                </div>
                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                  <i className="fas fa-user-plus text-xl"></i>
                </div>
              </div>
              <p className="text-red-500 text-sm mt-2">
                <i className="fas fa-arrow-down"></i> 3% from last month
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Inactive Members</p>
                  <h3 className="text-2xl font-bold">156</h3>
                </div>
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <i className="fas fa-user-clock text-xl"></i>
                </div>
              </div>
              <p className="text-red-500 text-sm mt-2">
                <i className="fas fa-arrow-up"></i> 5% from last month
              </p>
            </div>
          </div>

          {/* Members Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold text-lg">All Members</h3>
              <div className="flex space-x-2">
                <select className="border rounded px-3 py-1 text-sm">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>New</option>
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ministry</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 h-10 w-10 bg-${member.color}-100 text-${member.color}-600 rounded-full flex items-center justify-center font-semibold`}>
                            {member.initials}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{member.name}</div>
                            <div className="text-sm text-gray-500">Member ID: {member.memberId}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{member.email}</div>
                        <div className="text-sm text-gray-500">{member.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(member.status)}`}>
                          {member.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.ministry}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.joinDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button onClick={() => openViewModal(member)} className="text-indigo-600 hover:text-indigo-900"><i className="fas fa-eye"></i></button>
                          <button onClick={() => openEditModal(member)} className="text-yellow-600 hover:text-yellow-900"><i className="fas fa-edit"></i></button>
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
                Showing <span className="font-medium">1</span> to <span className="font-medium">{mockMembers.length}</span> of <span className="font-medium">1248</span> members
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">Previous</button>
                <button className="px-3 py-1 border rounded bg-indigo-600 text-white text-sm hover:bg-indigo-700">1</button>
                <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">2</button>
                <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">3</button>
                <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add Member Modal */}
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
              <h3 className="text-lg font-semibold text-gray-800">Add New Member</h3>
              <button onClick={() => setAddModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input type="date" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2" placeholder="Street" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="City" />
                    <input type="text" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="State" />
                    <input type="text" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="ZIP" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Member Status</label>
                    <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Active</option>
                      <option>Inactive</option>
                      <option>New</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Join Date</label>
                    <input type="date" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ministries</label>
                  <div className="flex flex-wrap gap-2">
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span className="ml-2">Worship Team</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span className="ml-2">Children's Ministry</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span className="ml-2">Men's Ministry</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span className="ml-2">Women's Ministry</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span className="ml-2">Outreach</span>
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <textarea rows="3" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t">
                  <button type="button" onClick={() => setAddModalOpen(false)} className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                    Save Member
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* View Member Modal */}
      {viewModalOpen && selectedMember && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setViewModalOpen(false);
            }
          }}
        >
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto overflow-hidden">
            <div className="relative h-32 bg-indigo-600 flex items-end px-6 pb-6">
              <button onClick={() => setViewModalOpen(false)} className="absolute top-4 right-4 text-white hover:text-gray-200 bg-black/20 rounded-full p-2 h-8 w-8 flex items-center justify-center">
                <i className="fas fa-times"></i>
              </button>
              <div className="absolute -bottom-12 left-6">
                <div className={`h-24 w-24 bg-white p-1 rounded-full shadow-md`}>
                   <div className={`h-full w-full bg-${selectedMember.color}-100 text-${selectedMember.color}-600 rounded-full flex items-center justify-center text-3xl font-bold`}>
                      {selectedMember.initials}
                   </div>
                </div>
              </div>
            </div>
            
            <div className="pt-14 px-6 pb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedMember.name}</h3>
                  <p className="text-gray-500">Member ID: {selectedMember.memberId}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedMember.status)}`}>
                  {selectedMember.status}
                </span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 border-b pb-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 uppercase">Contact</h4>
                    <p className="text-sm text-gray-900 mt-1 flex items-center"><i className="fas fa-envelope w-4 mr-2 text-indigo-400"></i> {selectedMember.email}</p>
                    <p className="text-sm text-gray-900 mt-1 flex items-center"><i className="fas fa-phone w-4 mr-2 text-indigo-400"></i> {selectedMember.phone}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 uppercase">Personal</h4>
                    <p className="text-sm text-gray-900 mt-1">DOB: {selectedMember.dob}</p>
                    <p className="text-sm text-gray-900 mt-1">Gender: {selectedMember.gender}</p>
                  </div>
                </div>

                <div className="border-b pb-4">
                  <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Address</h4>
                  <p className="text-sm text-gray-900">
                    {selectedMember.address.street}<br/>
                    {selectedMember.address.city}, {selectedMember.address.state} {selectedMember.address.zip}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Church Details</h4>
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                     <div>
                       <p className="text-xs text-gray-500">Ministries</p>
                       <p className="text-sm font-medium text-gray-900">{selectedMember.ministry}</p>
                     </div>
                     <div className="text-right">
                       <p className="text-xs text-gray-500">Join Date</p>
                       <p className="text-sm font-medium text-gray-900">{selectedMember.joinDate}</p>
                     </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-2">
                <button onClick={() => { setViewModalOpen(false); openEditModal(selectedMember); }} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition">
                  <i className="fas fa-edit mr-2"></i> Edit Member
                </button>
                <button onClick={() => setViewModalOpen(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Member Modal */}
      {editModalOpen && selectedMember && (
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
              <h3 className="text-lg font-semibold text-gray-800">Edit Member: {selectedMember.name}</h3>
              <button onClick={() => setEditModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" defaultValue={selectedMember.name.split(' ')[0]} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" defaultValue={selectedMember.name.split(' ').slice(1).join(' ')} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" defaultValue={selectedMember.email} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" defaultValue={selectedMember.phone} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input type="date" defaultValue={selectedMember.dob} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select defaultValue={selectedMember.gender} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input type="text" defaultValue={selectedMember.address.street} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2" placeholder="Street" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" defaultValue={selectedMember.address.city} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="City" />
                    <input type="text" defaultValue={selectedMember.address.state} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="State" />
                    <input type="text" defaultValue={selectedMember.address.zip} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="ZIP" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Member Status</label>
                    <select defaultValue={selectedMember.status} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Active</option>
                      <option>Inactive</option>
                      <option>New</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Join Date (Read-Only)</label>
                    <input type="text" disabled defaultValue={selectedMember.joinDate} className="w-full border rounded px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ministries</label>
                  <div className="flex flex-wrap gap-2">
                    <label className="inline-flex items-center">
                      <input type="checkbox" defaultChecked={selectedMember.ministry.includes('Worship')} className="rounded text-indigo-600" />
                      <span className="ml-2">Worship Team</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" defaultChecked={selectedMember.ministry.includes('Children')} className="rounded text-indigo-600" />
                      <span className="ml-2">Children's Ministry</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" defaultChecked={selectedMember.ministry.includes('Men')} className="rounded text-indigo-600" />
                      <span className="ml-2">Men's Ministry</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" defaultChecked={selectedMember.ministry.includes('Women')} className="rounded text-indigo-600" />
                      <span className="ml-2">Women's Ministry</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" defaultChecked={selectedMember.ministry.includes('Outreach')} className="rounded text-indigo-600" />
                      <span className="ml-2">Outreach</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t">
                  <button type="button" onClick={() => setEditModalOpen(false)} className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                    Update Member
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
