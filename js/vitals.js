(function($) {
$(document).ready(function() {

    var vitals = {
        "vitalsnow|5-10":[
        {
          "name": {
            "prefix": null,
            "given": "@MALE_FIRST_NAME",
            "family": "@LAST_NAME"
          },
          "dob": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SSS Z",
          "gender": "Male",
          "marital_status": "@MARITAL_STATUS",
          "address": {
            "street": "@NUM_3  @LOREM , Apt @NUM_3",
            "city": "San Francisco",
            "state": "CA",
            "zip": "@ZIP",
            "country": "US"
          },
          "phone": {
            "home": "tel:415-@NUM_3-@NUM_4",
            "work": "tel:510-@NUM_3-@NUM_4",
            "mobile": "tel:@NUM_3-@NUM_3-@NUM_4"
          },
          "email": "@EMAIL",
          "language": "eng",
          "race": "@RACE",
          "ethnicity": "@ETHNICITY",
          "religion": "null",
          "birthplace": {
            "state": "@STATES",
            "zip": "@ZIP",
            "country": "US"
          },
          "guardian": {
            "name": {
              "given": "@FEMALE_FIRST_NAME",
              "family": "@LAST_NAME"
            },
            "relationship": "@RELATIONSHIP",
            "address": {
              "street": "@NUM_3  @LOREM , Apt @NUM_3",
              "city": "San Francisco",
              "state": "CA",
              "zip": "@ZIP",
              "country": "US"
            },
            "phone": {
              "home": "tel:@NUM_3-@NUM_3-@NUM_4"
            }
          },
          "provider": {
            "organization": "@HOSPITALS",
            "phone": "@NUM_3-@NUM_3-@NUM_4",
            "address": {
              "street": "@NUM_4 @LOREM Healthcare Drive",
              "city": "San Francisco",
              "state": "CA",
              "zip": "@ZIP",
              "country": "US"
            }
          }
        }
        ]
    };

    $('#button-template4').click(function() {
        $('#template textarea').val(formatJSON(vitals));
        $('#button-generate').click();
    }); 


});

});

