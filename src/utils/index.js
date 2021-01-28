export function biggerFontSizer (width) {
    if(width > 400){
        return 20;
    }else if(width > 250){
        return 15;
    }else { 
        return 12;
    }
}

export function normalFontSizer(width){
    if(width > 400){
        return 12;
      }else if(width > 250){
        return 9;
      }else { 
        return 9;
      }
}