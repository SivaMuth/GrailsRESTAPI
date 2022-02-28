package com.djamware

import grails.rest.*

@Resource(uri='/student')
class Student {
  String firstname
  String lastname
  String email
  String age
  //String name
  //String address
  String city
  //String postalCode
 // String phone

  static constraints = {
      firstname blank:false
      lastname blank:false
      email blank:false
      age blank: false
     // name blank:false
     // address blank:false
      city blank:false
     // postalCode blank:false
      //phone blank:false

  }

  String toString() {
      firstname
  }
}
