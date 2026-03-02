import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { 
  ArrowLeft, Leaf, Shield, Award, TrendingDown, Droplet, 
  Recycle, Factory, Package, Truck, Home, Trash2, 
  CheckCircle, FileText, Download, Share2, Calendar,
  MapPin, Users, Sparkles
} from 'lucide-react';
import { findProductBySerial, getSustainabilityGrade } from '../data/mockData';
import { PieChart, Pie, Cell, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const DigitalPassport = () => {
  const { serialId } = useParams<{ serialId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'journey' | 'impact' | 'certifications'>('overview');

  const product = serialId ? findProductBySerial(serialId) : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sand-50 to-forest-50 flex items-center justify-center p-4">
        <div className="card max-w-md w-full text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-10 h-10 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-sand-900 mb-2">Passport Not Found</h2>
          <p className="text-sand-600 mb-6">The product passport you're looking for doesn't exist or hasn't been approved yet.</p>
          <button onClick={() => navigate('/consumer')} className="btn-primary">
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  // Only show approved products
  if (product.verificationStatus !== 'approved') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sand-50 to-forest-50 flex items-center justify-center p-4">
        <div className="card max-w-md w-full text-center">
          <div className="w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-10 h-10 text-earth-600" />
          </div>
          <h2 className="text-2xl font-bold text-sand-900 mb-2">Passport Pending Approval</h2>
          <p className="text-sand-600 mb-6">This product passport is currently under review by our auditors.</p>
          <button onClick={() => navigate('/consumer')} className="btn-primary">
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  const emissionData = [
    { name: 'Manufacturing', value: product.carbonFootprint.manufacturing, color: '#16a34a' },
    { name: 'Packaging', value: product.carbonFootprint.packaging, color: '#84cc16' },
    { name: 'Transport', value: product.carbonFootprint.transport, color: '#eab308' },
    { name: 'Usage', value: product.carbonFootprint.usage, color: '#a3e635' },
    { name: 'End of Life', value: product.carbonFootprint.endOfLife, color: '#65a30d' },
  ];

  const sustainabilityMetrics = [
    { metric: 'Carbon', value: 85, fullMark: 100 },
    { metric: 'Water', value: 90, fullMark: 100 },
    { metric: 'Materials', value: 95, fullMark: 100 },
    { metric: 'Circularity', value: 85, fullMark: 100 },
    { metric: 'Social', value: 88, fullMark: 100 },
  ];

  const categoryAverage = 3.5;
  const carbonSavings = ((categoryAverage - product.carbonFootprint.total) / categoryAverage * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-forest-50 to-leaf-50">
      {/* Header */}
      <div className="bg-white border-b border-sand-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/consumer')}
              className="flex items-center gap-2 text-sand-600 hover:text-sand-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Search</span>
            </button>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-sand-100 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-sand-600" />
              </button>
              <button className="p-2 hover:bg-sand-100 rounded-lg transition-colors">
                <Download className="w-5 h-5 text-sand-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Passport Cover */}
        <div className="relative mb-8">
          <div className="card overflow-hidden bg-gradient-to-br from-forest-600 via-forest-700 to-leaf-800 text-white p-8 md:p-12">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Leaf className="w-10 h-10" />
                    </div>
                    <div>
                      <p className="text-sm text-white text-opacity-80 uppercase tracking-wider">Digital Product Passport</p>
                      <h1 className="text-3xl md:text-4xl font-bold">Green Passport</h1>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Verified & Approved</span>
                  </div>
                </div>
                
                {/* Sustainability Grade Badge */}
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-2xl shadow-soft-lg flex flex-col items-center justify-center">
                    <span className="text-6xl font-bold text-forest-600">
                      {getSustainabilityGrade(product.sustainabilityScore)}
                    </span>
                    <span className="text-sm text-sand-600 font-medium">Grade</span>
                  </div>
                  <p className="text-sm mt-2 text-white text-opacity-90">{product.sustainabilityScore}/100</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-white text-opacity-70 mb-1">Product Name</p>
                  <p className="text-xl font-semibold">{product.name}</p>
                </div>
                <div>
                  <p className="text-sm text-white text-opacity-70 mb-1">Serial Number</p>
                  <p className="text-xl font-semibold font-mono">{product.serialId}</p>
                </div>
                <div>
                  <p className="text-sm text-white text-opacity-70 mb-1">Manufacturer</p>
                  <p className="text-xl font-semibold">{product.manufacturer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="card mb-8 p-2">
          <div className="flex gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 min-w-[140px] px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'overview'
                  ? 'bg-forest-600 text-white shadow-md'
                  : 'text-sand-700 hover:bg-sand-100'
              }`}
            >
              <Sparkles className="w-5 h-5 inline-block mr-2" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('journey')}
              className={`flex-1 min-w-[140px] px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'journey'
                  ? 'bg-forest-600 text-white shadow-md'
                  : 'text-sand-700 hover:bg-sand-100'
              }`}
            >
              <MapPin className="w-5 h-5 inline-block mr-2" />
              Journey
            </button>
            <button
              onClick={() => setActiveTab('impact')}
              className={`flex-1 min-w-[140px] px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'impact'
                  ? 'bg-forest-600 text-white shadow-md'
                  : 'text-sand-700 hover:bg-sand-100'
              }`}
            >
              <TrendingDown className="w-5 h-5 inline-block mr-2" />
              Impact
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex-1 min-w-[140px] px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'certifications'
                  ? 'bg-forest-600 text-white shadow-md'
                  : 'text-sand-700 hover:bg-sand-100'
              }`}
            >
              <Award className="w-5 h-5 inline-block mr-2" />
              Certifications
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="card bg-gradient-to-br from-forest-50 to-forest-100 border-forest-200">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-forest-600 rounded-xl flex items-center justify-center shadow-md">
                    <TrendingDown className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-forest-700 font-medium">Carbon Footprint</p>
                    <p className="text-2xl font-bold text-forest-900">{product.carbonFootprint.total} kg</p>
                    <p className="text-xs text-forest-600 mt-1">{carbonSavings}% below average</p>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-leaf-50 to-leaf-100 border-leaf-200">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-leaf-600 rounded-xl flex items-center justify-center shadow-md">
                    <Droplet className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-leaf-700 font-medium">Water Usage</p>
                    <p className="text-2xl font-bold text-leaf-900">2.5 L</p>
                    <p className="text-xs text-leaf-600 mt-1">Low consumption</p>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-earth-50 to-earth-100 border-earth-200">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-earth-600 rounded-xl flex items-center justify-center shadow-md">
                    <Recycle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-earth-700 font-medium">Circularity</p>
                    <p className="text-2xl font-bold text-earth-900">85%</p>
                    <p className="text-xs text-earth-600 mt-1">Highly recyclable</p>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-sand-50 to-sand-100 border-sand-200">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-sand-600 rounded-xl flex items-center justify-center shadow-md">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-sand-700 font-medium">Social Impact</p>
                    <p className="text-2xl font-bold text-sand-900">A+</p>
                    <p className="text-xs text-sand-600 mt-1">Fair labor certified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details & Radar Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-sand-900 mb-6 flex items-center gap-2">
                  <Package className="w-6 h-6 text-forest-600" />
                  Product Details
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-sand-100">
                    <span className="text-sand-600">Category</span>
                    <span className="font-semibold text-sand-900">{product.category}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-sand-100">
                    <span className="text-sand-600">Material Type</span>
                    <span className="font-semibold text-sand-900">{product.materialType}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-sand-100">
                    <span className="text-sand-600">Weight</span>
                    <span className="font-semibold text-sand-900">{product.weight}g</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-sand-100">
                    <span className="text-sand-600">Created Date</span>
                    <span className="font-semibold text-sand-900">{product.createdAt}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-sand-600">Approved Date</span>
                    <span className="font-semibold text-sand-900">{product.approvedAt}</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-sand-900 mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-forest-600" />
                  Sustainability Metrics
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={sustainabilityMetrics}>
                    <PolarGrid stroke="#d6d3d1" />
                    <PolarAngleAxis dataKey="metric" tick={{ fill: '#57534e', fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#78716c', fontSize: 10 }} />
                    <Radar name="Score" dataKey="value" stroke="#16a34a" fill="#16a34a" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Journey Tab */}
        {activeTab === 'journey' && (
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-sand-900 mb-6">Product Lifecycle Journey</h3>
              
              {/* Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-forest-500 via-leaf-500 to-earth-500"></div>

                {/* Manufacturing */}
                <div className="relative flex gap-6 mb-12">
                  <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 card bg-gradient-to-br from-forest-50 to-white border-forest-200">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-sand-900">Manufacturing</h4>
                      <span className="badge badge-success">{product.carbonFootprint.manufacturing} kg CO₂</span>
                    </div>
                    <p className="text-sand-700 mb-3">
                      Produced using sustainable manufacturing processes with renewable energy sources.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-sand-600">Location</p>
                        <p className="font-semibold text-sand-900">Sustainable Factory, India</p>
                      </div>
                      <div>
                        <p className="text-sand-600">Energy Source</p>
                        <p className="font-semibold text-sand-900">100% Renewable</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Packaging */}
                <div className="relative flex gap-6 mb-12">
                  <div className="w-16 h-16 bg-leaf-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 card bg-gradient-to-br from-leaf-50 to-white border-leaf-200">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-sand-900">Packaging</h4>
                      <span className="badge badge-info">{product.carbonFootprint.packaging} kg CO₂</span>
                    </div>
                    <p className="text-sand-700 mb-3">
                      Packaged with 100% recycled and biodegradable materials.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-sand-600">Material</p>
                        <p className="font-semibold text-sand-900">Recycled Cardboard</p>
                      </div>
                      <div>
                        <p className="text-sand-600">Recyclability</p>
                        <p className="font-semibold text-sand-900">100%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transport */}
                <div className="relative flex gap-6 mb-12">
                  <div className="w-16 h-16 bg-earth-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 card bg-gradient-to-br from-earth-50 to-white border-earth-200">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-sand-900">Transport</h4>
                      <span className="badge badge-warning">{product.carbonFootprint.transport} kg CO₂</span>
                    </div>
                    <p className="text-sand-700 mb-3">
                      Transported using optimized routes and eco-friendly logistics.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-sand-600">Distance</p>
                        <p className="font-semibold text-sand-900">1,200 km</p>
                      </div>
                      <div>
                        <p className="text-sand-600">Mode</p>
                        <p className="font-semibold text-sand-900">Electric Truck</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Usage */}
                <div className="relative flex gap-6 mb-12">
                  <div className="w-16 h-16 bg-forest-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 card bg-gradient-to-br from-forest-50 to-white border-forest-200">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-sand-900">Usage Phase</h4>
                      <span className="badge badge-success">{product.carbonFootprint.usage} kg CO₂</span>
                    </div>
                    <p className="text-sand-700 mb-3">
                      Minimal environmental impact during use with care instructions for longevity.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-sand-600">Expected Lifespan</p>
                        <p className="font-semibold text-sand-900">5+ years</p>
                      </div>
                      <div>
                        <p className="text-sand-600">Care</p>
                        <p className="font-semibold text-sand-900">Cold wash, air dry</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* End of Life */}
                <div className="relative flex gap-6">
                  <div className="w-16 h-16 bg-leaf-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Trash2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 card bg-gradient-to-br from-leaf-50 to-white border-leaf-200">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-sand-900">End of Life</h4>
                      <span className="badge badge-info">{product.carbonFootprint.endOfLife} kg CO₂</span>
                    </div>
                    <p className="text-sand-700 mb-3">
                      Fully recyclable with multiple end-of-life options available.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-sand-600">Recyclability</p>
                        <p className="font-semibold text-sand-900">85%</p>
                      </div>
                      <div>
                        <p className="text-sand-600">Disposal</p>
                        <p className="font-semibold text-sand-900">Textile recycling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Impact Tab */}
        {activeTab === 'impact' && (
          <div className="space-y-8">
            {/* Carbon Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-sand-900 mb-6">Carbon Footprint Breakdown</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={emissionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${((percent || 0) * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {emissionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-6 space-y-2">
                  {emissionData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-sand-700">{item.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-sand-900">{item.value} kg CO₂</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-sand-900 mb-6">Environmental Comparison</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-sand-700 font-medium">Carbon Footprint</span>
                      <span className="text-sm font-bold text-forest-600">{carbonSavings}% Better</span>
                    </div>
                    <div className="h-4 bg-sand-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-forest-500 to-leaf-500 rounded-full transition-all duration-1000"
                        style={{ width: `${100 - parseInt(carbonSavings)}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-sand-500">
                      <span>This Product: {product.carbonFootprint.total} kg</span>
                      <span>Average: {categoryAverage} kg</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-sand-700 font-medium">Water Usage</span>
                      <span className="text-sm font-bold text-forest-600">35% Better</span>
                    </div>
                    <div className="h-4 bg-sand-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-leaf-500 to-forest-500 rounded-full"
                        style={{ width: '65%' }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-sand-700 font-medium">Recyclability</span>
                      <span className="text-sm font-bold text-forest-600">15% Better</span>
                    </div>
                    <div className="h-4 bg-sand-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-earth-500 to-leaf-500 rounded-full"
                        style={{ width: '85%' }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-sand-700 font-medium">Social Responsibility</span>
                      <span className="text-sm font-bold text-forest-600">20% Better</span>
                    </div>
                    <div className="h-4 bg-sand-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-forest-500 to-earth-500 rounded-full"
                        style={{ width: '80%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Impact */}
            <div className="card bg-gradient-to-br from-forest-600 to-leaf-600 text-white">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Your Positive Impact</h3>
                  <p className="text-lg text-white text-opacity-90 mb-4">
                    By choosing this product, you've saved approximately <span className="font-bold">{(categoryAverage - product.carbonFootprint.total).toFixed(1)} kg CO₂</span> compared to conventional alternatives.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm text-white text-opacity-80">Equivalent to</p>
                      <p className="text-xl font-bold">12 km</p>
                      <p className="text-xs text-white text-opacity-70">Car travel saved</p>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm text-white text-opacity-80">Or planting</p>
                      <p className="text-xl font-bold">0.5</p>
                      <p className="text-xs text-white text-opacity-70">Trees per year</p>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm text-white text-opacity-80">Water saved</p>
                      <p className="text-xl font-bold">15 L</p>
                      <p className="text-xs text-white text-opacity-70">Fresh water</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="space-y-8">
            {/* Trust Badges */}
            <div className="card">
              <h3 className="text-2xl font-bold text-sand-900 mb-6">Verified Certifications & Trust Badges</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-forest-50 to-white border-2 border-forest-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-center text-sand-900 mb-2">Third-Party Verified</h4>
                  <p className="text-sm text-center text-sand-600">
                    Independently audited and verified by certified organizations
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center gap-1 text-xs text-forest-700 bg-forest-100 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      Verified: {product.approvedAt}
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-leaf-50 to-white border-2 border-leaf-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-leaf-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-center text-sand-900 mb-2">Organic Certified</h4>
                  <p className="text-sm text-center text-sand-600">
                    100% organic materials certified by GOTS standards
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center gap-1 text-xs text-leaf-700 bg-leaf-100 px-3 py-1 rounded-full">
                      <Award className="w-3 h-3" />
                      GOTS Certified
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-earth-50 to-white border-2 border-earth-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-earth-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-center text-sand-900 mb-2">Fair Trade</h4>
                  <p className="text-sm text-center text-sand-600">
                    Ethically sourced with fair labor practices throughout supply chain
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center gap-1 text-xs text-earth-700 bg-earth-100 px-3 py-1 rounded-full">
                      <Users className="w-3 h-3" />
                      Fair Trade Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Documents */}
            <div className="card">
              <h3 className="text-xl font-bold text-sand-900 mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-forest-600" />
                Supporting Documentation
              </h3>
              {product.documents && product.documents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 bg-sand-50 rounded-lg hover:bg-sand-100 transition-colors border border-sand-200">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-forest-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sand-900">{doc.name}</p>
                          <p className="text-sm text-sand-500">Uploaded: {doc.uploadedAt}</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-forest-100 rounded-lg transition-colors">
                        <Download className="w-5 h-5 text-forest-600" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-sand-500 py-8">No documents available</p>
              )}
            </div>

            {/* Auditor Approval */}
            <div className="card bg-gradient-to-br from-forest-50 to-leaf-50 border-forest-200">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-sand-900 mb-2">Auditor Verification</h4>
                  <p className="text-sand-700 mb-3">
                    This product passport has been thoroughly reviewed and approved by our certified auditors.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-sand-600">Approved By</p>
                      <p className="font-semibold text-sand-900">{product.approvedBy}</p>
                    </div>
                    <div>
                      <p className="text-sand-600">Approval Date</p>
                      <p className="font-semibold text-sand-900">{product.approvedAt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="card bg-gradient-to-r from-sand-50 to-forest-50 border-forest-200 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Recycle className="w-8 h-8 text-forest-600" />
              <div>
                <p className="font-semibold text-sand-900">End-of-Life Guidance</p>
                <p className="text-sm text-sand-600">Learn how to recycle or dispose of this product responsibly</p>
              </div>
            </div>
            <button className="btn-primary">
              View Recycling Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPassport;
