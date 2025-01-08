"use client"

import { useEffect, useState } from "react";
import { MdLocationOn, MdComputer, MdGroup } from 'react-icons/md';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";

enum Institutes {
  AIFrance = 'AIFrance',
  AIGermany = 'AIGermany',
  AINetherlands = 'AINetherlands',
  AIPortugal = 'AIPortugal',
  AIBrandTeam = 'AIBrandTeam',
}

export default function MapSection() {
  const t = useTranslations();

  const [selectedInstitute, setSelectedInstitute] = useState<string | null>(null);
  const [buttonPositions, setButtonPositions] = useState<{
    id: Institutes;
    x: number;
    y: number;
  }[]>([]);

  const handleButtonClick = (buttonIndex: string) => {
    console.log('Button clicked:', buttonIndex);

    setSelectedInstitute(buttonIndex);

  };

  useEffect(() => {
    const updateButtonPositions = () => {
      const svgElement = document.getElementById('map-svg');
      if (!svgElement) return;
      const svgRect = svgElement.getBoundingClientRect();
      const svgWidth = svgRect.width;
      const svgHeight = svgRect.height;

      // Calculate the positions of the buttons based on the SVG dimensions and the desired coordinates
      const positions = [
        { id: 'AIFrance', x: 31, y: 50 }, // Axians Institute - France coordinates
        { id: 'AIGermany', x: 47, y: 36 }, // Axians Institute - Germany coordinates
        { id: 'AINetherlands', x: 31, y: 31 }, // Axians Institute - Netherlands coordinates
        { id: 'AIPortugal', x: 14, y: 69 }, // Axians Institute - Portugal coordinates
        { id: 'AIBrandTeam', x: 6, y: 43 }, // Axians Institute - Brand team coordinates,
      ];

      const updatedButtonPositions = positions.map(({ id, x, y }) => ({
        id: id as Institutes,
        x: (x * svgWidth) / 100,
        y: (y * svgHeight) / 100,
      }));

      setButtonPositions(updatedButtonPositions);
    };

    updateButtonPositions();
    window.addEventListener('resize', updateButtonPositions);

    return () => {
      window.removeEventListener('resize', updateButtonPositions);
    };
  }, []);

  const InstituteButton = ({ id, label }: {
    id: Institutes;
    label: string;
  }) => {
    return (

      <div
        key={id}
        className='group cursor-pointer'
        onClick={() => handleButtonClick(id)}
      >
        <button className='chip'>
          <MdLocationOn aria-hidden='true' size={18} />
          {label}
        </button>
        <div className='mt-2 flex gap-2'>
          <button className='chip'>
            <MdGroup aria-hidden='true' size={18} /> 0
          </button>
          <button className='chip'>
            <MdComputer aria-hidden='true' size={18} /> 0
          </button>
        </div>
      </div>

    );
  };

  const instituteSwitch = (id: Institutes) => {
    switch (id) {
      case 'AIFrance':
        return <InstituteButton id={id} label={t('institutes.fr')} />;
      case 'AIGermany':
        return <InstituteButton id={id} label={t('institutes.de')} />;
      case 'AINetherlands':
        return <InstituteButton id={id} label={t('institutes.nl')} />;
      case 'AIPortugal':
        return <InstituteButton id={id} label={t('institutes.pt')} />;
      case 'AIBrandTeam':
        return <InstituteButton id={id} label={t('institutes.brandTeam')} />;
    }
  };

  return (
    <section
      className='hidden sm:block'
    >

      <div className='relative -mt-40 z-0'>
        <div className="z-10 absolute w-full mt-40 space-y-4">
          <h1 className="h1">See our locations and offers</h1>

          <Card className="bg-background">
            <CardContent>
              <p className="mb-3">The current locations for Axians Institute are shown in the map bellow, click on the tags to see more information.</p>
              <a href="#" className="font-medium text-brand-primary-main dark:text-brand-primary-dark hover:underline">Access all courses</a>
            </CardContent>
          </Card>

          {selectedInstitute && (
            <div className="mt-6 absolute right-0">
              <Card className="w-96">
                <CardHeader>
                  <CardTitle>{selectedInstitute}</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>


        <Image id='map-svg' className='h-auto w-full z-0' src="map.svg" alt="map" width={0} height={0} sizes="100vw" />



        {buttonPositions.map((buttonPosition, index) => (
          <div
            key={index}
            className='absolute'
            style={{ top: buttonPosition.y, left: buttonPosition.x }}
          >
            {instituteSwitch(buttonPosition.id)}
          </div>
        ))}

      </div>

    </section >
  );
}
