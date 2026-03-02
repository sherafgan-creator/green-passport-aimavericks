import { useState } from 'react';
import { Search, AlertCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { findProductBySerial } from '../data/mockData';

const ConsumerPortal = () => {
  const [serialId, setSerialId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const foundProduct = findProductBySerial(serialId);
    if (foundProduct) {
      // Navigate to digital passport page
      navigate(`/passport/${serialId}`);
    } else {
      setError('Product not found. Please check the serial ID and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-white to-leaf-50 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sand-600 hover:text-sand-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </button>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-sand-900">Consumer Passport Verification</h1>
          <p className="text-sand-600 mt-2">Scan or enter product serial ID to view sustainability information</p>
        </div>

      {/* Search Section */}
      <div className="card">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={serialId}
              onChange={(e) => setSerialId(e.target.value)}
              placeholder="Enter Serial ID (e.g., PROD-001-001)"
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="btn-primary flex items-center gap-2">
            <Search className="w-5 h-5" />
            Verify Product
          </button>
        </form>

        {error && (
          <div className="mt-4 flex items-start gap-3 text-red-700 bg-red-50 p-4 rounded-lg">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>{error}</p>
          </div>
        )}
      </div>

      {/* Sample Products */}
      <div className="card bg-gradient-to-br from-forest-50 to-leaf-50 border-forest-200">
        <h3 className="text-lg font-semibold text-sand-900 mb-4">Try These Sample Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => {
              setSerialId('PROD-001-001');
              navigate('/passport/PROD-001-001');
            }}
            className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-left border border-sand-200"
          >
            <p className="font-medium text-sand-900">Organic Cotton T-Shirt</p>
            <p className="text-sm text-sand-600 mt-1">PROD-001-001</p>
            <span className="inline-block mt-2 text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded">Grade A</span>
          </button>
          <button
            onClick={() => {
              setSerialId('PROD-002-001');
              navigate('/passport/PROD-002-001');
            }}
            className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-left border border-sand-200"
          >
            <p className="font-medium text-sand-900">Recycled Polyester Jacket</p>
            <p className="text-sm text-sand-600 mt-1">PROD-002-001</p>
            <span className="inline-block mt-2 text-xs bg-leaf-100 text-leaf-700 px-2 py-1 rounded">Grade C</span>
          </button>
          <button
            onClick={() => {
              setSerialId('PROD-003-001');
              navigate('/passport/PROD-003-001');
            }}
            className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-left border border-sand-200"
          >
            <p className="font-medium text-sand-900">Hemp Blend Jeans</p>
            <p className="text-sm text-sand-600 mt-1">PROD-003-001</p>
            <span className="inline-block mt-2 text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded">Grade A</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ConsumerPortal;
