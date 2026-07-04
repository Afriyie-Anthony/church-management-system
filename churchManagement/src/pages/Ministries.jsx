import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const initialMinistries = [
  { 
    id: 1, 
    name: 'Youth Ministry', 
    description: 'Empowering the next generation with the word of God. Activities include weekly meetings, outreach programs, and youth camps.', 
    leader: 'Elder John Doe', 
    membersCount: 45, 
    meetingTime: 'Fridays, 6:30 PM', 
    icon: 'fa-child',
    bgClass: 'bg-blue-100',
    textClass: 'text-blue-600'
  },
  { 
    id: 2, 
    name: "Women's Movement", 
    description: 'Fostering spiritual growth, fellowship, and support among women in the church community.', 
    leader: 'Deaconess Mary Smith', 
    membersCount: 82, 
    meetingTime: 'Tuesdays, 5:00 PM', 
    icon: 'fa-female',
    bgClass: 'bg-pink-100',
    textClass: 'text-pink-600'
  },
  { 
    id: 3, 
    name: "Men's Ministry (PEMEM)", 
    description: 'Building strong men of faith to lead their families and contribute positively to the church and society.', 
    leader: 'Elder Peter Osei', 
    membersCount: 65, 
    meetingTime: 'Thursdays, 6:00 PM', 
    icon: 'fa-male',
    bgClass: 'bg-indigo-100',
    textClass: 'text-indigo-600'
  },
  { 
    id: 4, 
    name: "Children's Ministry", 
    description: 'Providing a solid spiritual foundation for children through engaging biblical teachings and activities.', 
    leader: 'Sister Grace Annan', 
    membersCount: 120, 
    meetingTime: 'Sundays, 8:00 AM', 
    icon: 'fa-baby',
    bgClass: 'bg-green-100',
    textClass: 'text-green-600'
  }
];

export default function Ministries() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [ministries, setMinistries] = useState(initialMinistries);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMinistry, setEditingMinistry] = useState(null);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleOpenModal = (ministry = null) => {
    setEditingMinistry(ministry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingMinistry(null);
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic goes here
    handleCloseModal();
  };

  return (
    <>
      <section className="flex h-screen overflow-hidden bg-gray-50 font-sans">
        {/* Sidebar */}
      <div className={`sidebar bg-indigo-800 text-white flex flex-col ${sidebarOpen ? 'w-64' : 'collapsed'}`}>
        <div className="p-4 flex items-center space-x-3 border-b border-indigo-700">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <img
              src="/images.png"
              alt="Church Logo"
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
            <div className="sidebar-text text-xs text-indigo-200">Administrator</div>
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
          <Link to="/ministries" className="nav-item flex items-center space-x-3 p-3 rounded-lg bg-indigo-700 mb-1 active-nav">
            <i className="fas fa-church"></i>
            <span className="sidebar-text">Ministries</span>
          </Link>
          <a href="#" className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 mb-1">
            <i className="fas fa-file-alt"></i>
            <span className="sidebar-text">Reports</span>
          </a>
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
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-bars text-xl"></i>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Ministries</h1>
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
            </div>
          </div>
        </header>

        <div className="px-8 py-6 max-w-7xl mx-auto">
          {/* Action Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Church Ministries</h2>
              <p className="text-gray-500 text-sm mt-1">Manage and organize church departments and groups.</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search ministries..."
                  className="pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white w-64 shadow-sm"
                />
                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
              </div>
              <button
                onClick={() => handleOpenModal()}
                className="flex items-center space-x-2 bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition shadow-sm"
              >
                <i className="fas fa-plus"></i>
                <span>Add Ministry</span>
              </button>
            </div>
          </div>

          {/* Ministries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {ministries.map(ministry => (
              <div key={ministry.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`${ministry.bgClass} ${ministry.textClass} w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner`}>
                        <i className={`fas ${ministry.icon} text-2xl`}></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-800 leading-tight">{ministry.name}</h3>
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <i className="fas fa-users mr-1.5 text-xs text-indigo-400"></i>
                          <span>{ministry.membersCount} Members</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3 h-[60px]">
                    {ministry.description}
                  </p>

                  <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 text-gray-400"><i className="fas fa-user-tie"></i></div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Leader</p>
                        <p className="text-sm font-semibold text-gray-800">{ministry.leader}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 text-gray-400"><i className="fas fa-clock"></i></div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Meeting Time</p>
                        <p className="text-sm font-semibold text-gray-800">{ministry.meetingTime}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center">
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors flex items-center group">
                    View Details <i className="fas fa-arrow-right ml-2 text-xs transform group-hover:translate-x-1 transition-transform"></i>
                  </button>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleOpenModal(ministry)}
                      className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-colors shadow-sm"
                    >
                      <i className="fas fa-pen text-xs"></i>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-colors shadow-sm">
                      <i className="fas fa-trash text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      </section>

      {/* Add/Edit Ministry Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-xl font-bold text-gray-800">
                {editingMinistry ? 'Edit Ministry' : 'Add New Ministry'}
              </h3>
              <button 
                onClick={handleCloseModal} 
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ministry Name</label>
                  <input 
                    type="text" 
                    defaultValue={editingMinistry ? editingMinistry.name : ''}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow" 
                    placeholder="e.g. Youth Ministry" 
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Description</label>
                  <textarea 
                    rows="3" 
                    defaultValue={editingMinistry ? editingMinistry.description : ''}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-none" 
                    placeholder="Brief description of the ministry..."
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Leader Name</label>
                    <input 
                      type="text" 
                      defaultValue={editingMinistry ? editingMinistry.leader : ''}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow" 
                      placeholder="e.g. Elder John" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Meeting Time</label>
                    <input 
                      type="text" 
                      defaultValue={editingMinistry ? editingMinistry.meetingTime : ''}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow" 
                      placeholder="e.g. Fridays 6:00 PM" 
                      required 
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-6 border-t border-gray-100 mt-2">
                  <button 
                    type="button" 
                    onClick={handleCloseModal} 
                    className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition-all shadow-sm hover:shadow"
                  >
                    {editingMinistry ? 'Save Changes' : 'Create Ministry'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
