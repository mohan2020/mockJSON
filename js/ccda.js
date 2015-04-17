(function($) {
        
$(document).ready(function() {

    var demographics = {
        "patients|5-10":[
        {
          "name": {
            "prefix": null,
            "given": "@MALE_FIRST_NAME",
            "family": "@LAST_NAME"
          },
          "dob": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z",
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
            "organization": "@LOREM @LAST_NAME Health System",
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
/** end demographics **/

/* vitals */

    var vitals = {
        "vitals|5-10" : [
          {
    "BP|5-5":[
      {
        "code_system": "2.16.840.1.113883.6.1",
        "code_system_name": "LOINC",
        "bp_unit": "mm[Hg]",
        "date": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z",
        "BP Diastolic|60-79": 60,
        "BP Systolic|90-119": 90
      }
    ],
    "BMI|5-5":[
      {
        "date": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z",
            "code": "41909-3",
    "code_system": "2.16.840.1.113883.6.1",
    "code_system_name": "LOINC",
    "bmi_unit": "kg/m²",
        "Body Mass Index|19-25": 19
      }
    ],
    "Height|5-5":[
      {
        "date": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z",
        "code": "8302-2",
        "code_system": "2.16.840.1.113883.6.1",
        "code_system_name": "LOINC",
        "unit": "[in_us]",
        "Body Height Measured|60-80": 60
      }
    ],
    "Weight|5-5":[
      {
        "date": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z",
        "code": "3141-9",
        "code_system": "2.16.840.1.113883.6.1",
        "code_system_name": "LOINC",
        "unit": "[lb_av]",        
        "Body Weight Measured|120-240": 0
      }
    ]
  }    
]
      };

/** end vitals **/


/**  allergies  **/
      var allergy = { 
  "allergies|5-10" : [ 
  {
    "date_range": {
      "start": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z",
      "end": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z"
    },
    "name": null,
    "code": "ASSERTION",
    "code_system": "@SNOMED",
    "severity": "@SEVERITY",
    "reaction": {
      "name": "@ALLERGY_REACTION",
      "code_system": "@SNOMED"
    },
    "reaction_type": {
      "name": "@ALLERGYAE",
      "code_system": "@SNOMED"
    },
    "allergen": {
      "name": "@DRUG_ALLERGY",
      "code_system": "@RXNORM"
    }
  }
    ]
  };

/** end allergies **/

/** start encounters **/

var encounter = {
  "encounters|5-10" : [
  {
    "date": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z",
    "name": "InPatient Admission",
    "code": "99222",
    "code_system": "@CPT",
    "finding": {
      "name": "Pneumonia",
      "code": "233604007",
      "code_system": "SNOMED"
    },
    "translation": {
      "name": null,
      "code": null,
      "code_system": null,
      "code_system_name": null
    },
    "performer": {
      "name": "General Physician",
      "code_system": "@SNOMED"
    },
    "location": {
      "organization": "@LOREM @LAST_NAME Health System",
      "street": "@NUM_4 @LOREM Health Dr.",
      "city": "San Francisco",
      "state": "CA",
      "zip": "@ZIP",
      "country": "US"
    }
  }

  ]
};

/** end encounters **/

/** start immunizations **/
  var immunization = {
    "immunizations|5-10" : [
{
    "date": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z",
    "product": {
      "name": "Influenza virus vaccine",
      "code": "88",
      "code_system": "2.16.840.1.113883.6.59",
      "code_system_name": "CVX",
      "translation": {
        "name": "influenza, live, intranasal",
        "code": "111",
        "code_system": "@CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "C28161",
      "code_system": "@NCI"
    },
    "instructions": null,
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "@SNOMED"
    }
  },
  {
    "date": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z",
    "product": {
      "name": "Tetanus and diphtheria toxoids - preservative free",
      "code": "103",
      "code_system": "@CVX",
      "translation": {
        "name": "Tetanus and diphtheria toxoids - preservative free",
        "code": "09",
        "code_system": "@CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "C28161",
      "code_system": "@NCI"
    },
    "instructions": null,
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "@SNOMED"
    }
  }

    ]
  };


/** end immunizations **/


/** starts Labs **/
  var lab = {
    "labs|5-10" : [
    {
    "name": "CBC WO DIFFERENTIAL",
    "code": "43789009",
    "code_system": "@SNOMED",
    "results": [
      {
        "date": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z",
        "name": "HGB",
        "value": 10,
        "unit": "g/dl",
        "code": "30313-1",
        "code_system": "@LOINC",
        "reference": {
          "low": null,
          "high": null
        }
      }
    ]
  }
]
};
/** end Labs **/



/** start Medications **/
  var meds = {
    "meds|5-10" : [
{
    "date_range": {
      "start": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z",
      "end": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z"
    },
    "product": {
      "name": "Albuterol 0.09 MG/ACTUAT inhalant solution",
      "code": "573621",
      "code_system": "@RXNORM",
      "translation": {
        "name": "Proventil 0.09 MG/ACTUAT inhalant solution",
        "code": "573621",
        "code_system": "@RXNORM"
      }
    },
    "dose_quantity": {
      "value": "0.09",
      "unit": "mg/actuat"
    },
    "rate_quantity": {
      "value": "90",
      "unit": "ml/min"
    },
    "precondition": {
      "name": "Wheezing",
      "code": "56018004",
      "code_system": "@SNOMED"
    },
    "reason": {
      "name": "Pneumonia",
      "code": "233604007",
      "code_system": "@SNOMED"
    },
    "route": {
      "name": "RESPIRATORY (INHALATION)",
      "code": "C38216",
      "code_system": "@NCI"
    },
    "vehicle": {
      "name": "drug vehicle",
      "code": "412307009",
      "code_system": "@SNOMED"
    },
    "administration": {
      "name": "INHALANT",
      "code": "C42944",
      "code_system": "@NCI"
    },
    "prescriber": {
      "organization": "@LOREM @LAST_NAME Health System",
      "person": null
    }
  }

    ]
  };
/** end Medications **/


/** begin Problems **/
  var problems = {
    "problems|5-10" : [
{
    "date_range": {
      "start": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z",
      "end": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z"
    },
    "name": "Pneumonia",
    "status": "Resolved",
    "age": 65,
    "code": "233604007",
    "code_system": "@SNOMED"
  }
    ]
  };

/** end Problems **/



/** begin Procedures **/

  var procedure = {
      "procedures|5-10" : [
        {
    "date": "@DATE_YYYY-@DATE_MM-@DATE_DD T @TIME_HH:@TIME_MM:@TIME_SS Z",
    "name": "Chest X-Ray",
    "code": "168731009",
    "code_system": "@SNOMED",
    "specimen": {
      "name": null,
      "code": null,
      "code_system": null
    },
    "performer": {
      "organization": "@LOREM @LAST_NAME Health System",
      "street": "@NUM_4 @LOREM Healthcare Dr",
      "city": "San Francisco",
      "state": "CA",
      "zip": "@ZIP",
      "country": "US",
      "phone": "@NUM_3-@NUM_3-@NUM_4"
    },
    "device": {
      "name": "Urgent Care Center",
      "code": "1160-1",
      "code_system": "@HL7"
    }
  }

      ]
  };

/** end Procedures **/

/** start sample FHIR patient resource **/
{
  "resourceType": "Patient",
  "text": {
    "status": "generated",
    "div": "<div>\n      
    <table>\n <tbody>\n <tr>\n            
      <td>Name</td>\n <td>John Samuel <b>Appleseed</b> (&quot;John&quot;)</td>\n          
    </tr>\n <tr>\n <td>Address</td>\n            
    <td>1231 </td>\n </tr>\n <tr>\n            
    <td>Contacts</td>\n <td>Home: unknown. Work: (03) 5555 6473</td>\n          
</tr>\n <tr>\n <td>Id</td>\n            
<td>MRN: 12345 (Acme Healthcare)</td>\n </tr>\n        
</tbody>\n </table>\n </div>"
  },
  "identifier": [
    {
      "use": "usual",
      "label": "MRN",
      "system": "urn:oid:1.2.36.146.595.217.0.1",
      "value": "12345",
      "period": {
        "start": "2001-05-06"
      },
      "assigner": {
        "display": "Acme Healthcare"
      }
    }
  ],
  "name": [
    {
      "use": "official",
      "family": [
        "Chalmers"
      ],
      "given": [
        "Peter",
        "James"
      ]
    },
    {
      "use": "usual",
      "given": [
        "Jim"
      ]
    }
  ],
  "telecom": [
    {
      "use": "home"
    },
    {
      "system": "phone",
      "value": "(03) 5555 6473",
      "use": "work"
    }
  ],
  "gender": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/v3/AdministrativeGender",
        "code": "M",
        "display": "Male"
      }
    ]
  },
  "birthDate": "1974-12-25",
  "deceasedBoolean": false,
  "address": [
    {
      "use": "home",
      "line": [
        "534 Erewhon St"
      ],
      "city": "PleasantVille",
      "state": "Vic",
      "zip": "3999"
    }
  ],
  "contact": [
    {
      "relationship": [
        {
          "coding": [
            {
              "system": "http://hl7.org/fhir/patient-contact-relationship",
              "code": "partner"
            }
          ]
        }
      ],
      "name": {
        "family": [
          "du",
          "Marché"
        ],
        "_family": [
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/Profile/iso-21090#qualifier",
                "valueCode": "VV"
              }
            ]
          },
          null
        ],
        "given": [
          "Bénédicte"
        ]
      },
      "telecom": [
        {
          "system": "phone",
          "value": "+33 (237) 998327"
        }
      ]
    }
  ],
  "managingOrganization": {
    "reference": "Organization/1"
  },
  "active": true
}

/** end sample FHIR patient resource **/



    
    $('#template textarea').val(formatJSON(demographics));
    $('#result textarea').val(''); // reset
    
/*    $('#button-template1').click(function() {
        $('#template textarea').val(formatJSON(template1));
        $('#button-generate').click();
    });
    
    $('#button-template2').click(function() {
        $('#template textarea').val(formatJSON(template2));
        $('#button-generate').click();
    }); */

    $('#button-template3').click(function() {
        $('#template textarea').val(formatJSON(demographics));
        $('#button-generate').click();
    });  

    $('#button-template4').click(function() {
        $('#template textarea').val(formatJSON(vitals));
        $('#button-generate').click();
    });

    $('#button-template5').click(function() {
        $('#template textarea').val(formatJSON(allergy));
        $('#button-generate').click();
    });

    $('#button-template6').click(function() {
        $('#template textarea').val(formatJSON(encounter));
        $('#button-generate').click();
    });

    $('#button-template7').click(function() {
        $('#template textarea').val(formatJSON(immunization));
        $('#button-generate').click();
    });  

    $('#button-template8').click(function() {
        $('#template textarea').val(formatJSON(lab));
        $('#button-generate').click();
    });

    $('#button-template9').click(function() {
        $('#template textarea').val(formatJSON(meds));
        $('#button-generate').click();
    }); 

    $('#button-template10').click(function() {
        $('#template textarea').val(formatJSON(problems));
        $('#button-generate').click();
    });

    $('#button-template11').click(function() {
        $('#template textarea').val(formatJSON(procedure));
        $('#button-generate').click();
    });                    


    
    $('#button-generate').click(function() {
        try {
            var json = jQuery.parseJSON($('#template textarea').val());
            $.mockJSON(/mockme\.json/, json);
            //alert(formatJSON(template));
            //$('#template textarea').val(formatJSON(template));
        
            $.getJSON('mockme.json', function(json) {
                $('#result textarea').val(formatJSON(json));
            });
        } catch(e) {
            alert('Invalid JSON');
        }
    }).click();
    
    $.each($.mockJSON.data, function(keyword) {
        $('#keywords ul').append('<li><code>@' + keyword + '</code></li>');
    });
    
});




function formatJSON(obj, indent) {
    var result = [];
    indent = (indent || '') + '  ';
    var type = $.isArray(obj)
        ? 'array' 
        : (obj === null)
            ? 'null'
            : typeof obj;
            
    switch (type) {
        case 'object':
            result.push('{ ');
            for (var i in obj) {
                result.push('"' + i + '" : ' + formatJSON(obj[i], indent) + ',');
            }
            var last = result.pop();
            result.push(last.substr(0, last.length - 1));
            result.push('}');
            break;
            
        case 'array':
            result.push('[ ');
            for (var i = 0; i < obj.length; i++) {
                result.push(formatJSON(obj[i], indent) + ',');
            }
            var last = result.pop();
            result.push(last.substr(0, last.length - 1));
            result.push(']');
            break;
            
        case 'string':
            result.push('"' + obj + '"');
            break;
            
        default:
            result.push(obj + '');
            break;
    }
    
     return result.join('\n' + indent);
}

})(jQuery);


