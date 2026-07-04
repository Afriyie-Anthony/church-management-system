import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const initialCategories = [
  { id: 1, name: 'Tithes', description: 'Weekly tithes from members' },
  { id: 2, name: 'Offering', description: 'General service offerings' },
  { id: 3, name: 'Building Fund', description: 'Donations for new building' },
  { id: 4, name: 'Welfare', description: 'Funds for member welfare' }
];

const initialRecords = [
  { id: 1, categoryId: 1, categoryName: 'Tithes', event: 'Sunday Service', amount: 4500, date: 'Oct 15, 2023' },
  { id: 2, categoryId: 2, categoryName: 'Offering', event: 'Sunday Service', amount: 1250, date: 'Oct 15, 2023' },
  { id: 3, categoryId: 3, categoryName: 'Building Fund', event: 'Mid-Week Teaching', amount: 800, date: 'Oct 18, 2023' },
  { id: 4, categoryId: 1, categoryName: 'Tithes', event: 'Online Transfer', amount: 1200, date: 'Oct 20, 2023' },
];

const mockEventTypes = [
  'Sunday Service',
  'Mid-Week Teaching',
  'Youth Camp',
  'Online Transfer',
  'Fundraising Dinner',
  'Special Conference'
];

export default function Finance() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('records');
  
  const [categories, setCategories] = useState(initialCategories);
  const [records, setRecords] = useState(initialRecords);

  const [addRecordModalOpen, setAddRecordModalOpen] = useState(false);
  const [addCategoryModalOpen, setAddCategoryModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleAddRecord = (e) => {
    e.preventDefault();
    // Logic to add record would go here
    setAddRecordModalOpen(false);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    // Logic to add category would go here
    setAddCategoryModalOpen(false);
  };

  // Calculate totals
  const totalFinance = records.reduce((sum, record) => sum + record.amount, 0);
  const tithesTotal = records.filter(r => r.categoryName === 'Tithes').reduce((sum, record) => sum + record.amount, 0);
  const offeringTotal = records.filter(r => r.categoryName === 'Offering').reduce((sum, record) => sum + record.amount, 0);

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
            className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1"
          >
            <i className="fas fa-calendar-alt"></i>
            <span className="sidebar-text">Events</span>
          </Link>
          <Link
            to="/finance"
            className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1 active-nav"
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
            <h1 className="text-2xl font-bold text-gray-800">Finance Management</h1>
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
          
          {/* Tabs */}
          <div className="flex space-x-2 bg-white p-1 rounded-xl shadow-sm border border-gray-100 mt-4 mb-8 w-max">
            <button
              onClick={() => setActiveTab('records')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === 'records'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <i className="fas fa-list-ul"></i>
              <span>Finance Records</span>
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === 'categories'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <i className="fas fa-tags"></i>
              <span>Categories</span>
            </button>
          </div>

          {activeTab === 'records' && (
            <div>
              {/* Action Bar */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-2 md:space-y-0">
                <div className="relative w-full md:w-64">
                  <input
                    type="text"
                    placeholder="Search records..."
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
                    onClick={() => setAddRecordModalOpen(true)}
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    <i className="fas fa-plus"></i>
                    <span>Add Record</span>
                  </button>
                </div>
              </div>

              {/* statistic cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-indigo-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Total Finance (Month)</p>
                      <h3 className="text-2xl font-bold">₵{totalFinance.toLocaleString()}</h3>
                    </div>
                    <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                      <i className="fas fa-wallet text-xl"></i>
                    </div>
                  </div>
                  <p className="text-green-500 text-sm mt-2">
                    <i className="fas fa-arrow-up"></i> 8% from last month
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Tithes</p>
                      <h3 className="text-2xl font-bold">₵{tithesTotal.toLocaleString()}</h3>
                    </div>
                    <div className="p-3 rounded-full bg-green-100 text-green-600">
                      <i className="fas fa-hand-holding-usd text-xl"></i>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Offering</p>
                      <h3 className="text-2xl font-bold">₵{offeringTotal.toLocaleString()}</h3>
                    </div>
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                      <i className="fas fa-coins text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Records Table */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                  <h3 className="font-semibold text-lg text-gray-800">Recent Records</h3>
                  <div className="flex space-x-2">
                    <button className="p-1 rounded hover:bg-gray-200 transition text-gray-600">
                      <i className="fas fa-download"></i>
                    </button>
                    <button className="p-1 rounded hover:bg-gray-200 transition text-gray-600">
                      <i className="fas fa-print"></i>
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event / Source</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {records.map((record) => (
                        <tr key={record.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              {record.categoryName}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.event}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">₵{record.amount.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-3">
                              <button className="text-indigo-600 hover:text-indigo-900"><i className="fas fa-edit"></i></button>
                              <button className="text-red-600 hover:text-red-900"><i className="fas fa-trash"></i></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'categories' && (
            <div>
              <div className="flex justify-between items-center mb-6 mt-2">
                <h2 className="text-xl font-bold text-gray-800">Finance Categories</h2>
                <button
                  onClick={() => setAddCategoryModalOpen(true)}
                  className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  <i className="fas fa-plus"></i>
                  <span>Add Category</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map(category => (
                  <div key={category.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 p-6 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 text-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-inner">
                          <i className="fas fa-tag text-xl"></i>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-800 leading-tight">{category.name}</h3>
                          <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">ID: {category.id}</span>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"><i className="fas fa-edit text-sm"></i></button>
                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"><i className="fas fa-trash text-sm"></i></button>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed min-h-[40px]">{category.description}</p>
                    <button className="w-full py-2.5 bg-gray-50 hover:bg-indigo-50 text-indigo-600 font-medium rounded-xl text-sm transition-colors border border-gray-100 border-dashed hover:border-indigo-200">
                      View Records <i className="fas fa-arrow-right ml-1 text-xs"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Add Finance Record Modal */}
      {addRecordModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setAddRecordModalOpen(false);
            }
          }}
        >
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto overflow-hidden">
            <div className="px-4 py-3 border-b flex justify-between items-center bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800">Add Finance Record</h3>
              <button onClick={() => setAddRecordModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleAddRecord}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                    <option value="">-- Select Category --</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event / Source</label>
                  <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" required>
                    <option value="">-- Select Event / Source --</option>
                    {mockEventTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₵)</label>
                    <input type="number" step="0.01" min="0" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="0.00" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input type="date" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                  <textarea rows="2" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Additional details..."></textarea>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t">
                  <button type="button" onClick={() => setAddRecordModalOpen(false)} className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100 transition">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Save Record
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Add Category Modal */}
      {addCategoryModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setAddCategoryModalOpen(false);
            }
          }}
        >
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden">
            <div className="px-4 py-3 border-b flex justify-between items-center bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800">Add Category</h3>
              <button onClick={() => setAddCategoryModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleAddCategory}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                  <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Special Offering" required />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea rows="3" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="What is this category for?"></textarea>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t">
                  <button type="button" onClick={() => setAddCategoryModalOpen(false)} className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100 transition">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                    Create Category
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
