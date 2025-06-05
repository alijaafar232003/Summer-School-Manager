// src/pages/PathwayForm.tsx
import React, { useState, FormEvent } from 'react';
import NavBar from '../components/NavBar';
import './PathwayForm.css';

type PersonalityType = 'Analytical' | 'Creative' | 'Social';
type PreferenceType = 'Robotics' | 'Academic' | 'Sports' | 'Arts' | 'Technology';

const PathwayForm: React.FC = () => {
  const [hobbies, setHobbies] = useState('');
  const [grade, setGrade] = useState<number | ''>('');
  const [personality, setPersonality] = useState<PersonalityType>('Analytical');
  const [preferences, setPreferences] = useState<PreferenceType[]>([]);

  const handleCheckboxChange = (pref: PreferenceType) => {
    setPreferences((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // For now, just log the values. Later, you could send them to an API or localStorage.
    console.log({
      hobbies,
      grade,
      personality,
      preferences,
    });
    alert('Form submitted! Check the console for values.');
  };

  return (
    <div className="pathway-container">
      {/* Fixed Navbar */}
      <NavBar />

      {/* Content area under Navbar */}
      <div className="pathway-content">
        <form onSubmit={handleSubmit} className="pathway-card">
          <h2 className="pathway-heading">Choose Your Pathway</h2>

          {/* Hobbies */}
          <label className="pathway-label">Hobbies</label>
          <input
            type="text"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            className="pathway-input"
            placeholder="e.g. Painting, Coding, Soccer"
          />

          {/* Grade */}
          <label className="pathway-label">Grade / GPA</label>
          <input
            type="number"
            value={grade}
            onChange={(e) => setGrade(e.target.value === '' ? '' : Number(e.target.value))}
            className="pathway-input"
            placeholder="e.g. 3.5"
            step="0.01"
            min="0"
            max="4"
          />

          {/* Personality (radio) */}
          <label className="pathway-label">Personality Type</label>
          <div className="radio-group">
            {(['Analytical', 'Creative', 'Social'] as PersonalityType[]).map((type) => (
              <label key={type} className="radio-label">
                <input
                  type="radio"
                  name="personality"
                  value={type}
                  checked={personality === type}
                  onChange={() => setPersonality(type)}
                />
                {type}
              </label>
            ))}
          </div>

          {/* Preferences (checkbox) */}
          <label className="pathway-label">Preferences (Choose all that apply)</label>
          <div className="checkbox-group">
            {(['Robotics', 'Academic', 'Sports', 'Arts', 'Technology'] as PreferenceType[]).map(
              (pref) => (
                <label key={pref} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="preferences"
                    value={pref}
                    checked={preferences.includes(pref)}
                    onChange={() => handleCheckboxChange(pref)}
                  />
                  {pref}
                </label>
              )
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PathwayForm;
