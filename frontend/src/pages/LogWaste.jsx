import React from 'react';
import Navbar from '../components/navbar/Navbar';
import WasteTypeSelector from '../components/events/WasteTypeSelector';
import WeightInput from '../components/events/WeightInput';
import ImageUpload from '../components/events/ImageUpload';
import Button from '../components/common/Button';
import './styles/LogWaste.css';

const LogWaste = () => {
  const [wasteTypes, setWasteTypes] = React.useState([]);
  const [weight, setWeight] = React.useState('');
  const [image, setImage] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    alert(`Waste Types: ${wasteTypes.join(', ')}\nWeight: ${weight}kg\nImage: ${image ? image.name : 'None'}`);
  };

  return (
    <div className="log-waste-page">
      <Navbar />
      <main className="log-waste-main">
        <h1 className="log-waste-title">Log Waste Collection</h1>
        <form className="log-waste-form" onSubmit={handleSubmit}>
          <WasteTypeSelector value={wasteTypes} onChange={setWasteTypes} />
          <WeightInput value={weight} onChange={setWeight} />
          <ImageUpload value={image} onChange={setImage} />
          <Button type="submit">Submit</Button>
        </form>
      </main>
    </div>
  );
};

export default LogWaste; 