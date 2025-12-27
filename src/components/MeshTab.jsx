import { useState } from 'react';

const MeshTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const content = [];

  const currentItem = content[selectedIndex];

  return (
    <div className="flex min-h-[calc(100vh-120px)]">
      <button 
        className="fixed top-[140px] left-5 z-[1000] bg-crimson text-off-white border-none px-4 py-2.5 cursor-pointer rounded transition-all hover:opacity-80 text-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? '◀' : '▶'}
      </button>
      
      <aside className={`w-[300px] bg-crimson text-off-white pt-8 px-5 pb-5 overflow-y-auto fixed left-0 top-[120px] bottom-0 transition-transform shadow-[2px_0_8px_rgba(0,0,0,0.1)] ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <h2 className="text-xl mb-6 font-semibold pb-4 border-b-2 border-white/30 capitalize">
          mesh
        </h2>
        <nav className="space-y-2">
          {content.map((item, idx) => (
            <div key={idx}>
              <div
                className={`cursor-pointer p-3 rounded transition-colors ${selectedIndex === idx ? 'bg-white/20' : 'hover:bg-white/10'}`}
                onClick={() => setSelectedIndex(idx)}
              >
                <div className="text-[11px] opacity-70 uppercase tracking-wider mb-1">
                  {item.chapterTitle}
                </div>
                <div className="text-sm font-medium">
                  {item.sectionTitle}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </aside>

      <main className={`flex-1 p-10 px-[60px] max-w-[900px] transition-[margin-left] ${sidebarOpen ? 'ml-[300px]' : 'ml-0'}`}>
        <article>
          <div className="text-sm text-crimson uppercase tracking-wide mb-2.5 opacity-70">
            {currentItem?.chapterTitle}
          </div>
          <h1 className="text-crimson text-4xl mb-8 pb-4 border-b-[3px] border-crimson">
            {currentItem?.sectionTitle}
          </h1>
          
          {currentItem?.content.map((block, idx) => (
            <div key={idx}>
              {block.type === 'subsection' && (
                <h2 className="text-crimson text-2xl mt-10 mb-5">
                  {block.title}
                </h2>
              )}
              <div 
                className="leading-relaxed text-lg mb-6 [&_p]:mb-4 [&_strong]:text-crimson [&_strong]:font-semibold [&_code]:bg-crimson/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_code]:text-base"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            </div>
          ))}
        </article>
        
        <div className="flex justify-between mt-[60px] pt-8 border-t-2 border-gray-300">
          <button
            className="bg-crimson text-off-white border-none py-3 px-8 text-base cursor-pointer rounded transition-all hover:opacity-85 hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none"
            onClick={() => setSelectedIndex(Math.max(0, selectedIndex - 1))}
            disabled={selectedIndex === 0}
          >
            ← Previous
          </button>
          <button
            className="bg-crimson text-off-white border-none py-3 px-8 text-base cursor-pointer rounded transition-all hover:opacity-85 hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none"
            onClick={() => setSelectedIndex(Math.min(content.length - 1, selectedIndex + 1))}
            disabled={selectedIndex === content.length - 1}
          >
            Next →
          </button>
        </div>
      </main>
    </div>
  );
};

export default MeshTab;