import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';

const tabsList = [
  {
    id: 0,
    name: "Tab 1",
    description: "lorem 1"
  },
  {
    id: 1,
    name: "Tab 2",
    description: "lorem 2"
  },
  {
    id: 2,
    name: "Tab 3",
    description: "lorem 3"
  },
]

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  
  const handleTabs = (item) => {
    
    setCurrentTab(item?.id);
  }

  const tabListData = tabsList?.find(tab => tab?.id === currentTab);

  return (
    <>
      <h1>Vite + React + Tab examples</h1>
      <div className={`w-full flex items-center flex-col bg-amber-400`}>
        <div className='w-full !flex-row'>
          {
          tabsList && tabsList?.map(item => <div
            className={`inline-block !w-16 cursor-pointer !p-2 ${currentTab === item?.id && "border-b-2 border-red-600 text-red-600 font-semibold"}`} 
            key={item?.id}
            onClick={() => handleTabs(item)}
          >
              {item?.name}
          </div>)
        }
        </div>

        <div className="w-full h-screen bg-white">
          <Tabs id={tabListData?.id} name={tabListData?.name} description={tabListData?.description} />
        </div>
      </div>
    </>
  )
}

export default App
