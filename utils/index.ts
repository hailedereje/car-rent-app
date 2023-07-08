import { CarProps } from "@/types";

export  const fetchCars = async ()=> {
    const headers = {
		'X-RapidAPI-Key': '496b0a29f1mshf37408d76918e8bp114456jsnfe99629dab40',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    
    const  response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{headers:headers});
    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

export const generateCarImage = (car : CarProps,angle?: string)=>{
  const url = new URL("http://cdn.imagin.studio/getimage")
  const {make,year,model} = car
  url.searchParams.append("customer","hrjavascript-mastery")

  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;

}
    


