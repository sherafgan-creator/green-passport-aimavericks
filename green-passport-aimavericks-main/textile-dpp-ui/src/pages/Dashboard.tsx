import { useState } from 'react';
import { Plus, TrendingUp, CheckCircle, Package, Leaf, Upload, X } from 'lucide-react';
import { mockProducts, getSustainabilityGrade, getVerificationBadgeColor } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Dashboard = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    materialType: '',
    weight: '',
    manufacturing: '',
    packaging: '',
    transport: '',
    usage: '',
    endOfLife: '',
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const totalProducts = mockProducts.length;
  const avgCarbonFootprint = (
    mockProducts.reduce((sum, p) => sum + p.carbonFootprint.total, 0) / totalProducts
  ).toFixed(2);
  const avgScore = Math.round(
    mockProducts.reduce((sum, p) => sum + p.sustainabilityScore, 0) / totalProducts
  );
  const verifiedCount = mockProducts.filter(p => p.verificationStatus === 'approved').length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product created:', formData);
    console.log('Uploaded files:', uploadedFiles);
    setShowCreateForm(false);
    setFormData({
      productName: '',
      materialType: '',
      weight: '',
      manufacturing: '',
      packaging: '',
      transport: '',
      usage: '',
      endOfLife: '',
    });
    setUploadedFiles([]);
  };

  const chartData = mockProducts.map(product => ({
    name: product.name.split(' ').slice(0, 2).join(' '),
    Manufacturing: product.carbonFootprint.manufacturing,
    Packaging: product.carbonFootprint.packaging,
    Transport: product.carbonFootprint.transport,
    Usage: product.carbonFootprint.usage,
    'End of Life': product.carbonFootprint.endOfLife,
  }));

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-sand-900">Manufacturer Dashboard</h1>
          <p className="text-sand-600 mt-1">Manage your digital product passports</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add New Product
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-sand-600 mb-1">Total Products</p>
              <p className="text-3xl font-bold text-sand-900">{totalProducts}</p>
            </div>
            <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-forest-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-sand-600 mb-1">Avg Carbon Footprint</p>
              <p className="text-3xl font-bold text-sand-900">{avgCarbonFootprint} <span className="text-lg">kg</span></p>
            </div>
            <div className="w-12 h-12 bg-leaf-100 rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-leaf-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-sand-600 mb-1">Avg Sustainability Score</p>
              <p className="text-3xl font-bold text-forest-600">{avgScore}</p>
            </div>
            <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-earth-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-sand-600 mb-1">Verified Products</p>
              <p className="text-3xl font-bold text-sand-900">{verifiedCount}/{totalProducts}</p>
            </div>
            <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-forest-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Emissions Chart */}
      <div className="card">
        <h2 className="text-xl font-semibold text-sand-900 mb-6">Emission Breakdown by Product</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
            <XAxis dataKey="name" stroke="#78716c" />
            <YAxis stroke="#78716c" label={{ value: 'kg CO₂e', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e7e5e4',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            />
            <Legend />
            <Bar dataKey="Manufacturing" stackId="a" fill="#16a34a" />
            <Bar dataKey="Packaging" stackId="a" fill="#84cc16" />
            <Bar dataKey="Transport" stackId="a" fill="#eab308" />
            <Bar dataKey="Usage" stackId="a" fill="#a3e635" />
            <Bar dataKey="End of Life" stackId="a" fill="#65a30d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Product List */}
      <div className="card">
        <h2 className="text-xl font-semibold text-sand-900 mb-6">Product Passports</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-sand-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-sand-700">Product Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-sand-700">Category</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-sand-700">Material</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-sand-700">Score</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-sand-700">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-sand-700">QR Code</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((product) => (
                <tr key={product.id} className="border-b border-sand-100 hover:bg-sand-50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-sand-900">{product.name}</p>
                      <p className="text-sm text-sand-500">{product.id}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sand-700">{product.category}</td>
                  <td className="py-4 px-4 text-sand-700">{product.materialType}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-forest-600">
                        {getSustainabilityGrade(product.sustainabilityScore)}
                      </span>
                      <span className="text-sm text-sand-600">({product.sustainabilityScore})</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`badge ${getVerificationBadgeColor(product.verificationStatus)}`}>
                      {product.verificationStatus}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="w-12 h-12 bg-sand-100 rounded flex items-center justify-center">
                      <span className="text-xs text-sand-600">QR</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Product Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-soft-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-sand-200">
              <h2 className="text-2xl font-bold text-sand-900">Create Product Passport</h2>
              <p className="text-sand-600 mt-1">Enter product details and emission data</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-sand-900">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-sand-700 mb-2">Product Name</label>
                    <input
                      type="text"
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sand-700 mb-2">Material Type</label>
                    <input
                      type="text"
                      value={formData.materialType}
                      onChange={(e) => setFormData({ ...formData, materialType: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-sand-700 mb-2">Weight (grams)</label>
                    <input
                      type="number"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-sand-900">Emission Data (kg CO₂e)</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-sand-700 mb-2">Manufacturing</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.manufacturing}
                      onChange={(e) => setFormData({ ...formData, manufacturing: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sand-700 mb-2">Packaging</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.packaging}
                      onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sand-700 mb-2">Transport</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.transport}
                      onChange={(e) => setFormData({ ...formData, transport: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sand-700 mb-2">Usage</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.usage}
                      onChange={(e) => setFormData({ ...formData, usage: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-sand-700 mb-2">End of Life</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.endOfLife}
                      onChange={(e) => setFormData({ ...formData, endOfLife: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-sand-900">Supporting Documents</h3>
                <div>
                  <label className="block text-sm font-medium text-sand-700 mb-2">
                    Upload Evidence Documents (Certificates, Reports, etc.)
                  </label>
                  <div className="border-2 border-dashed border-sand-300 rounded-lg p-6 text-center hover:border-forest-500 transition-colors">
                    <input
                      type="file"
                      id="file-upload"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <Upload className="w-12 h-12 text-sand-400 mb-2" />
                      <p className="text-sm text-sand-700 font-medium">Click to upload documents</p>
                      <p className="text-xs text-sand-500 mt-1">PDF, JPG, PNG, DOC (Max 10MB each)</p>
                    </label>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium text-sand-700">Uploaded Files:</p>
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-sand-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Package className="w-4 h-4 text-sand-600" />
                            <span className="text-sm text-sand-900">{file.name}</span>
                            <span className="text-xs text-sand-500">({(file.size / 1024).toFixed(1)} KB)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-600 hover:text-red-700 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button type="submit" className="btn-primary flex-1">
                  Create Product Passport
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
