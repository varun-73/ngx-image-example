import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent  } from "ngx-image-gallery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  selected:any;
  choosedDate(event: any) {
    const chosenDate = event;
    console.log('Chosen date:', chosenDate);

  }
  @ViewChild(NgxImageGalleryComponent)
ngxImageGallery!: NgxImageGalleryComponent;
  
  // gallery configuration
  public conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: true, 
    showThumbnails: true,
    showCloseControl: true,
    inline: true,
    backdropColor: '#f3f5fd',
    showArrows: true
}
  // gallery images
  images: GALLERY_IMAGE[] = [
    {
      url: "assets/img1.jpg", 
      altText: 'woman-in-black-blazer-holding-blue-cup', 
      title: '1st image',
      thumbnailUrl: "assets/img1.jpg",

    },
    {
      url: "assets/img2.jpg", 
      altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain', 
      //extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
      thumbnailUrl: "assets/img2.jpg",
      title:'2nd image'
    },
    {
      url: "assets/img3.jpg", 
      altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain', 
      //extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
      thumbnailUrl: "assets/img3.jpg",
      title:"3rd Image"
    }
  ];
 
  constructor(){
   // this.ngxImageGallery.activeImageIndex=1;
  }
 
  ngOnInit() {
    if(this.ngxImageGallery){
      console.log(this.ngxImageGallery.activeImageIndex)
    }
  }
    
  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }
    
  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }
    
  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }
    
  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }
    
  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }
    
  /**************************************************/
    
  // EVENTS
  // callback on gallery opened
  galleryOpened(index: any) {
    console.info('Gallery opened at index ', index);
  }
 
  // callback on gallery closed
  galleryClosed() {
    console.info('Gallery closed.');
  }
 
  // callback on gallery image clicked
  galleryImageClicked(index: any) {
    console.info('Gallery image clicked with index ', index);
  }
  
  // callback on gallery image changed
  galleryImageChanged(index: any) {
    console.info('Gallery image changed to index ', index);
  }
 
  // callback on user clicked delete button
  deleteImage(index: any) {
    console.info('Delete image at index ', index);
  }
}

export interface GALLERY_CONF {
  imageBorderRadius?: string; // css border radius of image (default 3px)
  imageOffset?: string; // add gap between image and it's container (default 20px)
  imagePointer? :boolean; // show a pointer on image, should be true when handling onImageClick event (default false)
  showDeleteControl?: boolean; // show image delete icon (default false)
  showCloseControl?: boolean; // show gallery close icon (default true)
  showExtUrlControl?: boolean; // show image external url icon (default true)
  showImageTitle?: boolean; // show image title text (default true)
  showThumbnails?: boolean; // show thumbnails (default true)
  closeOnEsc?: boolean; // close gallery on `Esc` button press (default true)
  reactToKeyboard?: boolean; // change image on keyboard arrow press (default true)
  reactToMouseWheel?: boolean; // change image on mouse wheel scroll (default true)
  reactToRightClick?: boolean; // disable right click on gallery (default false)
  thumbnailSize?: number; // thumbnail size (default 30)
  backdropColor?: string; // gallery backdrop (background) color (default rgba(13,13,14,0.85))
  inline?: boolean; // make gallery inline (default false)
  showArrows?: boolean; // show prev / next arrows (default true)
}
 
// gallery image
export interface GALLERY_IMAGE {
  url: string; // url of the image
  thumbnailUrl?: string; // thumbnail url (recommended), if not present, gallery will use `url` property to get thumbnail image.
  altText?: string; // alt text for image
  title?: string; // title of the image
  extUrl?: string; // external url of image
  extUrlTarget?: string; // external url target e.g. '_blank', '_self' etc.
}
