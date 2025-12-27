import { useState } from 'react';
import AcceleratedFutureTab from './components/AcceleratedFutureTab';
import ActionCombatTab from './components/ActionCombatTab';
import CharacterCreationTab from './components/CharacterCreationTab';
import EclipseTab from './components/EclipseTab';
import GameInformationTab from './components/GameInformationTab';
import GearTab from './components/GearTab';
import LackTab from './components/LackTab';
import MechanicsTab from './components/MechanicsTab';
import MeshTab from './components/MeshTab';
import MindHacksTab from './components/MindHacksTab';
import ReferencesTab from './components/ReferencesTab';
import SkillsTab from './components/SkillsTab';
import SynopsisTab from './components/SynopsisTab';
import TablesTab from './components/TablesTab';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
  {
    "id": 0,
    "name": "accelerated future",
    "component": "AcceleratedFutureTab"
  },
  {
    "id": 1,
    "name": "action combat",
    "component": "ActionCombatTab"
  },
  {
    "id": 2,
    "name": "character creation",
    "component": "CharacterCreationTab"
  },
  {
    "id": 3,
    "name": "eclipse",
    "component": "EclipseTab"
  },
  {
    "id": 4,
    "name": "game information",
    "component": "GameInformationTab"
  },
  {
    "id": 5,
    "name": "gear",
    "component": "GearTab"
  },
  {
    "id": 6,
    "name": "lack",
    "component": "LackTab"
  },
  {
    "id": 7,
    "name": "mechanics",
    "component": "MechanicsTab"
  },
  {
    "id": 8,
    "name": "mesh",
    "component": "MeshTab"
  },
  {
    "id": 9,
    "name": "mind hacks",
    "component": "MindHacksTab"
  },
  {
    "id": 10,
    "name": "references",
    "component": "ReferencesTab"
  },
  {
    "id": 11,
    "name": "skills",
    "component": "SkillsTab"
  },
  {
    "id": 12,
    "name": "synopsis",
    "component": "SynopsisTab"
  },
  {
    "id": 13,
    "name": "tables",
    "component": "TablesTab"
  }
];

  const renderActiveTab = () => {
    switch(activeTab) {
      case 0:
        return <AcceleratedFutureTab />;
      case 1:
        return <ActionCombatTab />;
      case 2:
        return <CharacterCreationTab />;
      case 3:
        return <EclipseTab />;
      case 4:
        return <GameInformationTab />;
      case 5:
        return <GearTab />;
      case 6:
        return <LackTab />;
      case 7:
        return <MechanicsTab />;
      case 8:
        return <MeshTab />;
      case 9:
        return <MindHacksTab />;
      case 10:
        return <ReferencesTab />;
      case 11:
        return <SkillsTab />;
      case 12:
        return <SynopsisTab />;
      case 13:
        return <TablesTab />;
      default:
        return <AcceleratedFutureTab />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-serif text-[#2C2C2C] bg-off-white">
      <header className="bg-crimson text-off-white py-5 px-10 shadow-[0_2px_8px_rgba(0,0,0,0.1)] sticky top-0 z-[100]">
        <h1 className="text-3xl mb-4 font-semibold">Eclipse Phase</h1>
        <nav className="flex gap-2.5 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`bg-white/10 text-off-white border-none py-2.5 px-5 text-base cursor-pointer rounded transition-all font-serif hover:bg-white/20 ${activeTab === tab.id ? 'bg-off-white !text-crimson font-semibold' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </header>
      <div className="flex-1 relative">
        {renderActiveTab()}
      </div>
    </div>
  );
}

export default App;