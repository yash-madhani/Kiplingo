import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const Locations = [
  "New York, USA",
  "Los Angeles, USA",
  "Chicago, USA",
  "San Francisco, USA",
  "Miami, USA",
];

const Categories = [
  "Lifestyle",
  "Fitness",
  "Food",
  "Travel",
  "Beauty",
  "Photography",
];
const Platforms = [
  "Instagram",
  "YouTube",
  "TikTok",
  "X",
  "Facebook",
  "LinkedIn",
];

function InfluencersFilterBar() {
    const [followers, setFollowers] = useState<any>(0);

  return (
    <div className="w-[20%] h-full text-center pl-4 pt-2">
      {/* Search  */}
      <Input className="mb-2" type="text" placeholder="Search" />
      {/* Location  */}
      <div className="mb-2">
        <Select>
          <SelectTrigger className="w-full mx-auto">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            {Locations.map((location) => (
              <SelectItem value={location}>{location}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Category  */}
      <div className="mb-2">
        <p className="text-left">Categories:</p>
        <div className="text-left pl-2">
          {Categories.map((category) => (
            <div>
              <Checkbox id={category} />
              <label
                htmlFor={category}
                className="px-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Platform  */}
      <div className="mb-2">
        <p className="text-left">Platform: </p>
        <div className="text-left pl-2">
          {Platforms.map((platform) => (
            <div>
              <Checkbox id={platform} />
              <label
                htmlFor={platform}
                className="px-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {platform}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Followers  */}
      <div className="mb-2">
        <p className="text-left">Followers: {followers}+</p>
        <div className="flex">
            <p>0</p>
            <input
              type="range"
              step={1000}
              min={0}
              max={1000000}
              value={followers}
              className='cursor-pointer w-full'
              onChange={(e) => { setFollowers(e.target.value) }}
            />
            <p>1M+</p>
            
        </div>
        
      </div>
      {/* Apply Filter Button */}
      <div>
        <Button>Apply Filters</Button>
      </div>
    </div>
  );
}

export default InfluencersFilterBar;
