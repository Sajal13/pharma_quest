'use client';

import { useCallback, useEffect, useRef } from 'react';
import { countries, CountryData } from '@/data/country';
import mapboxgl, { Map, Marker } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import classNames from 'classnames';

interface MapBoxProps {
  playerName: string;
  score: number;
  unlockCountries: number[];
  currentCountryToComplete: number;
  onCountryButtonClick: (country: CountryData) => void;
}

const MapBox = ({
  playerName,
  score,
  unlockCountries,
  currentCountryToComplete,
  onCountryButtonClick
}: MapBoxProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);
  const markers = useRef<Record<string, Marker>>({});

  const updateMarkers = useCallback(() => {
    if (!map.current || !map.current.loaded()) return;

    // Remove existing markers
    Object.values(markers.current).forEach(marker => marker.remove());
    markers.current = {};

    countries.forEach(country => {
      const isLocked = !unlockCountries.includes(country.id);
      const isCurrent = country.id === currentCountryToComplete;
      const isCompleted = unlockCountries.includes(country.id);

      const el = document.createElement('button');
      el.type = 'button';

      el.className = classNames(
        'flex items-center justify-center rounded-full text-white font-bold transition-all duration-300 ease-linear cursor-pointer border-2 p-3 px-5 shadow-md',
        {
          'bg-red-500 border-red-500 hover:bg-red-700': isLocked,
          'bg-green-500 border-green-500 hover:bg-green-700': isCurrent,
          'bg-blue-500 border-blue-500 hover:bg-blue-700': isCompleted
        }
      );

      el.textContent = country.name.slice(0, 1);
      el.title = country.name;

      el.addEventListener('click', () => onCountryButtonClick(country));

      const marker = new mapboxgl.Marker(el)
        .setLngLat(country.coordinates)
        .addTo(map.current!);

      markers.current[country.id] = marker;
    });
  }, [unlockCountries, currentCountryToComplete, onCountryButtonClick]);

  const flyToCountry = useCallback((countryId: number) => {
    const country = countries.find(c => c.id === countryId);
    if (country && map.current) {
      map.current.flyTo({
        center: country.coordinates,
        zoom: 4, // Optional zoom level
        essential: true, // Ensures the transition is smooth
        speed: 1.2, // Speed of the flight
        curve: 1.2 // Curvature of the fly animation
      });
    }
  }, []);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [90.3563, 23.685],
      zoom: 2.5,
      projection: 'globe'
    });

    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'white',
        'high-color': '#add8e6',
        'space-color': '#d8f2ff',
        'horizon-blend': 0.5
      });
    });

    map.current.on('load', () => {
      updateMarkers();
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [updateMarkers]);

  useEffect(() => {
    if (map.current?.loaded()) updateMarkers();
  }, [unlockCountries, currentCountryToComplete, updateMarkers]);

  useEffect(() => {
    if (unlockCountries.length > 1) {
      const lastUnlockedCountry = unlockCountries[unlockCountries.length - 1];
      flyToCountry(lastUnlockedCountry);
    }
  }, [unlockCountries, flyToCountry]);

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0  right-0 p-4  bg-opacity-90 z-10  rounded-b-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          Name: <span className="font-press-start text-blue-700 capitalize">{playerName}!</span>
        </h2>
        <span className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          Score: <span className="font-press-start text-blue-700">{score} XP💥</span>
        </span>
      </div>
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default MapBox;
