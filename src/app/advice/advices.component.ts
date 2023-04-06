import { Component } from '@angular/core';

@Component({
  selector: 'app-advice',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent {
  displayedColumns: string[] = [ 'position','name', 'description', 'penalty'];
  rules = [
    {
      position:1,
      name: 'No Littering',
      description: 'Do not leave any trash behind, pack out everything you bring in',
      penalty: 'Fine up to $5,000 or imprisonment up to 6 months'
    },
    {position:2,
      name: 'Stay on Designated Trails',
      description: 'Do not go off-trail, this helps protect fragile ecosystems',
      penalty: 'Fine up to $500 or imprisonment up to 6 months'
    },
    {position:3,
      name: 'No Open Fires',
      description: 'Only use designated fire rings or stoves to prevent wildfires',
      penalty: 'Fine up to $5,000 or imprisonment up to 6 months'
    },
    {position:4,
      name: 'Respect Wildlife',
      description: 'Do not disturb or feed any wildlife, observe from a safe distance',
      penalty: 'Fine up to $10,000 or imprisonment up to 1 year'
    },
    {position:5,
      name: 'Camp in Designated Areas Only',
      description: 'Use established campsites to avoid damaging the natural environment',
      penalty: 'Fine up to $500 or imprisonment up to 6 months'
    },
    {position:6,
      name: 'Respect Cultural and Historic Sites',
      description: 'Do not touch, disturb or remove any cultural or historic artifacts',
      penalty: 'Fine up to $1,000,000 or imprisonment up to 2 years'
    },
    {position:7,
      name: 'No Motorized Vehicles',
      description: 'Do not use any motorized vehicles on non-designated areas',
      penalty: 'Fine up to $5,000 or imprisonment up to 6 months'
    },
    {position:8,
      name: 'No Hunting or Fishing without a Permit',
      description: 'Obtain necessary permits before hunting or fishing',
      penalty: 'Fine up to $500 or imprisonment up to 6 months'
    },
    {position:9,
      name: 'Leave No Trace',
      description: 'Leave the natural environment as you found it, minimize your impact',
  penalty: 'Fine up to $5,000 or imprisonment up to 6 months'
},
{position:10,
  name: 'Respect Quiet Hours',
    description: 'Be considerate of other campers and respect quiet hours',
  penalty: 'Fine up to $500 or imprisonment up to 6 months'
},
{position:11,
  name: 'Dispose of Waste Properly',
    description: 'Do not leave any waste behind, dispose of it in proper receptacles',
  penalty: 'Fine up to $5,000 or imprisonment up to 6 months'
},
{position:12,
  name: 'No Smoking',
    description: 'Smoking is prohibited in most natural areas due to the risk of fire',
  penalty: 'Fine up to $500 or imprisonment up to 6 months'
},
{position:13,
  name: 'Obey Posted Signs and Regulations',
    description: 'Be aware of and follow all posted signs and regulations',
  penalty: 'Fine up to $500 or imprisonment up to 6 months'
},
];
}
