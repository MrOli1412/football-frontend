import {FormControl} from '@angular/forms';

export function requiredFileType( type: string ) {
  return function (control: FormControl) {
    const file = control.value;
    if ( file ) {
      console.log(file);

      const extension = file.split('.');
      console.log(extension);
      if ( type.toLowerCase() !== extension[extension.length-1].toLowerCase() ) {
        return {
          requiredFileType: true
        };
      }

      return null;
    }

    return null;
  };
}
