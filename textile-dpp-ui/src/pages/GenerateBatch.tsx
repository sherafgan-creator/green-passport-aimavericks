import { useState } from 'react';
import { Download, Package, AlertCircle } from 'lucide-react';
import { mockProducts, generateSerialProducts } from '../data/mockData';

const GenerateBatch = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [batchSize, setBatchSize] = useState('');
  const [generatedBatch, setGeneratedBatch] = useState<any[]>([]);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const size = parseInt(batchSize);
    if (size > 0 && selectedProduct) {
      const batch = generateSerialProducts(selectedProduct, size);
      setGeneratedBatch(batch);
    }
  };

  const handleDownload = () => {
    console.log('Downloading batch ZIP...');
    alert('Batch QR codes would be downloaded as ZIP file');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-sand-900">Generate Batch</h1>
        <p className="text-sand-600 mt-1">Create serialized products with unique QR codes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="card">
          <h2 className="text-xl font-semibold text-sand-900 mb-6">Batch Configuration</h2>
          
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-sand-700 mb-2">
                Select Product
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="input-field"
                required
              >
                <option value="">Choose a product...</option>
                {mockProducts.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name} ({product.id})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-sand-700 mb-2">
                Batch Size
              </label>
              <input
                type="number"
                min="1"
                max="10000"
                value={batchSize}
                onChange={(e) => setBatchSize(e.target.value)}
                className="input-field"
                placeholder="Enter number of units"
                required
              />
              {parseInt(batchSize) > 1000 && (
                <div className="mt-2 flex items-start gap-2 text-earth-700 bg-earth-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Large batch size detected. Generation may take longer.
                  </p>
                </div>
              )}
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <Package className="w-5 h-5" />
              Generate Batch
            </button>
          </form>
        </div>

        {/* Preview Section */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-sand-900">Batch Preview</h2>
            {generatedBatch.length > 0 && (
              <button
                onClick={handleDownload}
                className="btn-secondary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download ZIP
              </button>
            )}
          </div>

          {generatedBatch.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-sand-300 mx-auto mb-4" />
              <p className="text-sand-500">No batch generated yet</p>
              <p className="text-sm text-sand-400 mt-1">
                Select a product and batch size to generate
              </p>
            </div>
          ) : (
            <div>
              <div className="bg-forest-50 border border-forest-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-forest-700 font-medium">Batch Generated</p>
                    <p className="text-2xl font-bold text-forest-800 mt-1">
                      {generatedBatch.length} Units
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-forest-100 rounded-lg flex items-center justify-center">
                    <Package className="w-8 h-8 text-forest-600" />
                  </div>
                </div>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {generatedBatch.slice(0, 10).map((item) => (
                  <div
                    key={item.serialId}
                    className="flex items-center justify-between p-4 bg-sand-50 rounded-lg hover:bg-sand-100 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-sand-900">{item.serialId}</p>
                      <p className="text-sm text-sand-600">{item.name}</p>
                    </div>
                    <div className="w-16 h-16 bg-white border-2 border-sand-200 rounded flex items-center justify-center">
                      <span className="text-xs text-sand-500">QR</span>
                    </div>
                  </div>
                ))}
                {generatedBatch.length > 10 && (
                  <div className="text-center py-3 text-sm text-sand-500">
                    + {generatedBatch.length - 10} more items
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Batch Summary */}
      {generatedBatch.length > 0 && (
        <div className="card">
          <h2 className="text-xl font-semibold text-sand-900 mb-6">Batch Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-sand-600 mb-1">Product</p>
              <p className="text-lg font-semibold text-sand-900">{generatedBatch[0].name}</p>
            </div>
            <div>
              <p className="text-sm text-sand-600 mb-1">Total Units</p>
              <p className="text-lg font-semibold text-sand-900">{generatedBatch.length}</p>
            </div>
            <div>
              <p className="text-sm text-sand-600 mb-1">Serial Range</p>
              <p className="text-lg font-semibold text-sand-900">
                {generatedBatch[0].serialId} - {generatedBatch[generatedBatch.length - 1].serialId}
              </p>
            </div>
            <div>
              <p className="text-sm text-sand-600 mb-1">Sustainability Score</p>
              <p className="text-lg font-semibold text-forest-600">{generatedBatch[0].sustainabilityScore}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateBatch;
