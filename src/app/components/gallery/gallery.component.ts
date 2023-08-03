import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images: any = [
    {
      img: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
      isPermission: true,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedqsCGAgGhxZPD12nFKNFaC8yuIkAr2LFnA&usqp=CAU',
      isPermission: true,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7COLtqjiARDBOvjwDzdDkDfsPzlr7PRzPg&usqp=CAU',
      isPermission: true,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUKc-5qYP1Xcwwwg4ObkoAXc7t1JKcypGa1w&usqp=CAU',
      isPermission: true,
    },
  ];
  constructor(public coreService: CoreService) {}

  ngOnInit(): void {}
}
