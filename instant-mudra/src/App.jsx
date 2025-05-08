import './App.css';
import { files } from './data';

const NestedChild = ({ childrenList }) => {
  return (
    <div>
      {childrenList?.map((child) => (
        <div key={child.id || child.label} className='parent-label'>
          {child?.children ? '>' : '-'} {child?.label}
          {child?.children && <NestedChild childrenList={child.children} />}
        </div>
      ))}
    </div>
  );
};

const Parent = ({ file }) => {
  return (
    <div key={file.id || file.label}>
      <div> {file.label && ">"} {file.label}</div>
      {file?.children && <NestedChild childrenList={file.children} />}
    </div>
  );
};

function App() {
  return (
    <div>
      {files?.map((file) => (
        <Parent key={file.id || file.label} file={file} />
      ))}
    </div>
  );
}

export default App;
