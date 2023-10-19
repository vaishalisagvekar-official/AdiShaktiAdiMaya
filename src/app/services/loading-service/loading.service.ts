import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor() {}

  // ------------------ Loader ------------------ //

  showLoader(id: string) {
    return new Promise((resolve, reject) => {
      // 1. Select the div element using the id property
      const domBody = document.getElementsByTagName('body');
      // 2. Create a new <p></p> element programmatically
      const loaderDiv = document.createElement('div');
      // 3. Add the text content
      loaderDiv.className = 'loader';
      loaderDiv.id = id;
      loaderDiv.style.display = 'block';
      // 4. Append the p element to the div element
      domBody[0]?.prepend(loaderDiv);
      resolve(loaderDiv);
    });
  }

  hideLoader(id: string) {
    const loaderElement = document.getElementById(id);
    loaderElement?.remove();
  }
  // --------------- Loader END ---------------- //
}
