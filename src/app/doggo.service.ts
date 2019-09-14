import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { FormsModule } from "@angular/forms";
@Injectable({
  providedIn: "root"
})
export class DoggoService {
  userID: string = "1";
  userLoginURL: string = "http://localhost:3000/user/login";
  userSignupURL: string = "http://localhost:3000/user/signup";
  userUpdateURL: string = "http://localhost:3000/owner/address";
  ownerAddingPetURL: string = "http://localhost:3000/owner/create";
  getPetURL: string = `http://localhost:3000/owner/`;
  deletePet: string = "http://localhost:3000/owner/delete/";
  ownerRecentRequestURL: string ="http://localhost:3000/walker/owner-requests/" 
  walkerProfile: string = `http://localhost:3000/owner/`;
  updateRequest: string = "http://localhost:3000/walker/update-request/1"


  userProfile: string = `http://localhost:3000/owner/userinfo`;



  constructor(private http: HttpClient) { }
  petDataSource = new BehaviorSubject<any>([]);

  cast = this.petDataSource.asObservable();

  sessionToken = new BehaviorSubject<any>("");

  token = this.sessionToken.asObservable();
  //TOKEN ITEMS
  checkToken() {
    if (sessionStorage.getItem("token")) {
      this.sessionToken.next(sessionStorage.getItem("token"));
    }
  }
  logOut() {
    this.sessionToken.next(undefined);
  }
  // PROFILE OWNER
  addressUpdate(addressData) {
    const body = {
      data: {
        street: addressData.street,
        city: addressData.city,
        state: addressData.state,
        zipcode: addressData.zipcode,
        phoneNumber: addressData.phoneNumber,
        picture: addressData.photourl
      }
    };
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json", Authorization: this.sessionToken.value
    });
    return this.http.put(this.userUpdateURL, body, { headers: reqHeaders });
  }
  //PET OWNER ADDING PET
  petAdd(formData) {
    const body = {
      data: {
        petName: formData.petName,
        image: formData.photourl,
        breed: formData.breed,
        age: formData.age,
        weight: formData.weight,
        gender: formData.gender,
        bio: formData.bio
      }
    };
    console.log(formData.gender);
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionToken.value
    });
    return this.http.post(this.ownerAddingPetURL, body, {
      headers: reqHeaders
    });
  }
  // PET OWNER GETTING PETS FOR TABLE
  ownerPetData() {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionToken.value
    });
    return (
      this.http
        .get(this.getPetURL, { headers: reqHeaders })
        .subscribe(pet => {
          console.log(pet);
          this.petDataSource.next(pet);
        })
    );
  }
  //DELETING PET DATA
  deletePetData(id) {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionToken.value
    });
    this.http
      .delete(this.deletePet + id, { headers: reqHeaders })
      .subscribe(() => {
        console.log("this works2");
        this.ownerPetData();
      });
  }
  /// signup/login
  userLogin(formData) {
    const reqHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    const body = {
      user: {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstname,
        lastName: formData.lastname,
        accountType: formData.accountType
      }
    };
    return this.http.post(this.userLoginURL, body, {
      headers: reqHeaders
    });
  }

  // WALKER INFO FOR SIDEBAR
  walkerData() {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionToken.value
    });
    return (
      this.http
        .get(this.walkerProfile, { headers: reqHeaders })

    );
  }

  userSignup(formData) {
    const reqHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    const body = {
      user: {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstname,
        lastName: formData.lastname,
        accountType: formData.accountType
      }
    };
    console.log(body);
    return this.http.post(this.userSignupURL, body, {
      headers: reqHeaders
    });
  }
// PULLING REQUESTS THAT OWNER MADE

  addReview(data) {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.sessionToken.value
    });
      const body = {
        data: {
          reviewTitle: data.reviewTitle,
          // rating: data.rating,
          review: data.review
        }
      };
      return (
        this.http
          .put(this.updateRequest, body, { headers: reqHeaders })
  
      );

      }


    // OWNER/WALKER INFO FOR SIDEBAR
    getUserInfo() {
      const reqHeaders = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.sessionToken.value
      });
      return (
        this.http
          .get(this.userProfile, { headers: reqHeaders })
  
      );
    }

    

}

