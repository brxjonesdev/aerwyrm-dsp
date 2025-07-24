/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from './card';

interface FeaturedCardProps {
  title: string;
  blurb: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
  mdxLink?: string;
  tags?: string[];
}

export default function FeaturedCard({
  title,
  blurb,
  imageSrc,
  imageAlt,
  link,
  mdxLink,
  tags,
}: FeaturedCardProps) {
  return (
    <Card className="bg-[#1a1a1a] border-none">
      <CardHeader className="flex lg:flex-col p-0 px-4 gap-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-28 object-cover rounded-md p-0 m-0"
        />
        <div className="space-y-2">
          <CardTitle className="text-cyan-400/70">{title}</CardTitle>
          <CardDescription>{blurb}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4"></CardContent>
    </Card>
  );
}
