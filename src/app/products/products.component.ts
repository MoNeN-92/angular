import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private activeRouter: ActivatedRoute,
    private Router: Router,
 

   
  ) { }

  id = this.activeRouter.snapshot.params['id']
  title = this.activeRouter.snapshot.params['title']
  poster = this.activeRouter.snapshot.params['poster']
  active = this.activeRouter.snapshot.params['active']

  ngOnInit(): void {
    this.product = this.product.find((el: any) => {
      return el.id == this.id;
      

    })
 
    this.product.poster = this.product.poster.find((el: any) => {
      return el.poster == this.poster;
      

    })

  }
 
  product: any = [
    {
      id: 6,
      title: 'iphone 6',
      description: `	Performance	Basemark X: 15841
Display	Contrast ratio: 1213 (nominal), 3.838 (sunlight)
Camera	Photo / Video
Loudspeaker	Voice 66dB / Noise 65dB / Ring 72dB
Audio quality	Noise -94dB / Crosstalk -73.4dB
Battery life	
Endurance rating 61h`,
      poster: 'https://i.insider.com/540f3701eab8eaf81065a627?width=700',
      active: true,
    },
    
    
    {
      id: 7,
      title: 'iphone 7',
      description: `	Performance	Basemark X: 15841
  Display	Contrast ratio: 1213 (nominal), 3.838 (sunlight)
  Camera	Photo / Video
  Loudspeaker	Voice 66dB / Noise 65dB / Ring 72dB
  Audio quality	Noise -94dB / Crosstalk -73.4dB
  Battery life	
  Endurance rating 61h`,
      poster: 'https://i.insider.com/540f3701eab8eaf81065a627?width=700',
      active: false,
    },
    {
      id: 8,
      title: 'iphone 8',
      description: `	Performance	Basemark X: 15841
    Display	Contrast ratio: 1213 (nominal), 3.838 (sunlight)
    Camera	Photo / Video
    Loudspeaker	Voice 66dB / Noise 65dB / Ring 72dB
    Audio quality	Noise -94dB / Crosstalk -73.4dB
    Battery life	
    Endurance rating 61h`,
      poster: 'https://i.insider.com/540f3701eab8eaf81065a627?width=700',
      active: true,
    },
    {
      id: 9,
      title: 'iphone 9',
      description: `	Performance	Basemark X: 15841
      Display	Contrast ratio: 1213 (nominal), 3.838 (sunlight)
      Camera	Photo / Video
      Loudspeaker	Voice 66dB / Noise 65dB / Ring 72dB
      Audio quality	Noise -94dB / Crosstalk -73.4dB
      Battery life	
      Endurance rating 61h`,
      poster: 'https://i.insider.com/540f3701eab8eaf81065a627?width=700',
      active: true,
    },
    {
      id: 10,
      title: 'iphone 10',
      description: `	Performance	Basemark X: 15841
        Display	Contrast ratio: 1213 (nominal), 3.838 (sunlight)
        Camera	Photo / Video
        Loudspeaker	Voice 66dB / Noise 65dB / Ring 72dB
        Audio quality	Noise -94dB / Crosstalk -73.4dB
        Battery life	
        Endurance rating 61h`,
      poster: 'https://i.insider.com/540f3701eab8eaf81065a627?width=700',
      active: true,
    },
    {
      id: 11,
      title: 'iphone 11',
      description: `	Performance	Basemark X: 15841
          Display	Contrast ratio: 1213 (nominal), 3.838 (sunlight)
          Camera	Photo / Video
          Loudspeaker	Voice 66dB / Noise 65dB / Ring 72dB
          Audio quality	Noise -94dB / Crosstalk -73.4dB
          Battery life	
          Endurance rating 61h`,
      poster: 'https://i.insider.com/540f3701eab8eaf81065a627?width=700',
      active: true,
    },
    {
      id: 12,
      title: 'iphone 12',
      description: `	Performance	Basemark X: 15841
            Display	Contrast ratio: 1213 (nominal), 3.838 (sunlight)
            Camera	Photo / Video
            Loudspeaker	Voice 66dB / Noise 65dB / Ring 72dB
            Audio quality	Noise -94dB / Crosstalk -73.4dB
            Battery life	
            Endurance rating 61h`,
      poster: 'https://i.insider.com/540f3701eab8eaf81065a627?width=700',
      active: true,
    },
    {
      id: 13,
      title: 'iphone 13',
      description: `	Performance	Basemark X: 15841
              Display	Contrast ratio: 1213 (nominal), 3.838 (sunlight)
              Camera	Photo / Video
              Loudspeaker	Voice 66dB / Noise 65dB / Ring 72dB
              Audio quality	Noise -94dB / Crosstalk -73.4dB
              Battery life	
              Endurance rating 61h`,
      poster: 'https://i.insider.com/540f3701eab8eaf81065a627?width=700',
      active: true,
    },
    {
      id: 14,
      title: 'iphone 14',
      description: `	Performance	Basemark X: 15841
                Display	Contrast ratio: 1213 (nominal), 3.838 (sunlight)
                Camera	Photo / Video
                Loudspeaker	Voice 66dB / Noise 65dB / Ring 72dB
                Audio quality	Noise -94dB / Crosstalk -73.4dB
                Battery life	
                Endurance rating 61h`,
      poster: 'https://i.insider.com/540f3701eab8eaf81065a627?width=700',
      active: true,
    },
    {
      id: 15,
      title: 'iphone 15',
      description: `	Performance	Basemark X: 15841
                  Display	Contrast ratio: 1213 (nominal), 3.838 (sunlight)
                  Camera	Photo / Video
                  Loudspeaker	Voice 66dB / Noise 65dB / Ring 72dB
                  Audio quality	Noise -94dB / Crosstalk -73.4dB
                  Battery life	
                  Endurance rating 61h`,
      poster: 'https://i.insider.com/540f3701eab8eaf81065a627?width=700',
      active: true,
    },


  ]

  back() {
    this.Router.navigate(['services']);

  }
  


};