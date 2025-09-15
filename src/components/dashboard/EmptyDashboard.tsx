import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Globe, Video, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNotebooks } from '@/hooks/useNotebooks';
const EmptyDashboard = () => {
  const navigate = useNavigate();
  const {
    createNotebook,
    isCreating
  } = useNotebooks();
  const handleCreateNotebook = () => {
    console.log('Create notebook button clicked');
    console.log('isCreating:', isCreating);
    createNotebook({
      title: 'Untitled notebook',
      description: ''
    }, {
      onSuccess: data => {
        console.log('Navigating to notebook:', data.id);
        navigate(`/notebook/${data.id}`);
      },
      onError: error => {
        console.error('Failed to create notebook:', error);
      }
    });
  };
  return <div className="text-center py-16">
      <div className="mb-12 glass-card rounded-2xl p-8">
        <h2 className="text-3xl font-medium text-white mb-4 drop-shadow-lg">Create your first notebook</h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">InsightsLM is an AI-powered research and writing assistant that works best with the sources you upload</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <div className="w-12 h-12 glass rounded-lg mx-auto mb-4 flex items-center justify-center">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2 drop-shadow">PDFs</h3>
          <p className="text-white/80">Upload research papers, reports, and documents</p>
        </div>

        <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <div className="w-12 h-12 glass rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Globe className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2 drop-shadow">Websites</h3>
          <p className="text-white/80">Add web pages and online articles as sources</p>
        </div>

        <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <div className="w-12 h-12 glass rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Video className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2 drop-shadow">Audio</h3>
          <p className="text-white/80">Include multimedia content in your research</p>
        </div>
      </div>

      <Button onClick={handleCreateNotebook} size="lg" className="glass-button text-white border-white/30 hover:border-white/50" disabled={isCreating}>
        <Upload className="h-5 w-5 mr-2" />
        {isCreating ? 'Creating...' : 'Create notebook'}
      </Button>
    </div>;
};
export default EmptyDashboard;