(function($) {
        
$(document).ready(function() {

    /** start sample FHIR patient resource **/
var patient = {
        "patients|5-5":[
{
  "resourceType": "Patient",
  "text": {
    "status": "generated"
  },
  "identifier|1-3": [
    {
      "use": "@ID_USE",
      "label": "@ID_LABEL",
      "value": "@NUM_6",
      "system": "urn:oid:1.2.36.146.595.217.0.1",
      "period": {
        "start": "@DATE_YYYY-@DATE_MM-@DATE_DD"
      },
      "assigner": {
        "display": "@LOREM Healthcare"
      }
    }
  ],
  "name|1-1": [
    {
      "use": "@NAME_USE",
      "family|1-2": [
        "@LAST_NAME"
      ],
      "given|1-2": [
        "@MALE_FIRST_NAME"
      ]
    }
  ],
  "telecom|1-2": [
    {
      "system": "phone",
      "value": "@NUM_3-@NUM_3-@NUM_4",
      "use": "@TEL_USE"
    }
  ],
  "gender|1-1": {
    "coding|2-2": [
      {
        "system": "http://snomed.info/sct",
        "code": "248153007",
        "display": "Male"
      },
      {
        "system": "http://hl7.org/fhir/v3/AdministrativeGender",
        "code": "M",
        "display": "Male"
      }
    ]
  },
  "birthDate": "@DATE_YYYY-@DATE_MM-@DATE_DD",
  "deceasedBoolean": false,
  "address|1-2": [
    {
      "use": "@ADDR_USE",
      "line": "@NUM_3  @LOREM , Apt @NUM_3",
      "city": "@LAST_NAME",
      "state": "@STATES",
      "zip": "@ZIP"
    }
  ],
  "maritalStatus": {
    "coding|2-2": [
      {
        "system": "http://snomed.info/sct",
        "code": "36629006",
        "display": "Legally married"
      },
      {
        "system": "http://hl7.org/fhir/v3/MaritalStatus",
        "code": "M"
      }
    ]
  },
  "contact|1-1": [
    {
      "relationship|1-1": [
        {
          "coding|1-1": [
            {
              "system": "http://hl7.org/fhir/patient-contact-relationship",
              "code": "partner"
            }
          ]
        }
      ],
      "name": {
      "family|1-2": [
        "@LAST_NAME"
      ],
        "_family|1-1": [
          {
            "extension|1-1": [
              {
                "url": "http://hl7.org/fhir/Profile/iso-21090#qualifier",
                "valueCode": "VV"
              }
            ]
          },
          null
        ],
        "given|1-2": [
        "@FEMALE_FIRST_NAME"
      ]
      },
      "telecom|1-2": [
    {
      "system": "phone",
      "value": "@NUM_3-@NUM_3-@NUM_4",
      "use": "@TEL_USE"
    }
  ]
    }
  ],
  "managingOrganization": {
    "reference": "Organization/1"
  },
  "active": true
}
        ]
    };

/** end sample FHIR patient resource **/

/** begin sample allergyIntolerance resource **/

var allergies = {
        "allergyIntolerance|5-5":[
{
  "resourceType": "Bundle",
  "title": "Search results for AllergyIntolerance",
  "entry|1-3": [
    {
      "title": "Entry for AllergyIntolerance",
      "id": "@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER",
      "updated": "2015-05-16T10:47:49",
      "published": "2015-05-16T10:47:49",
      "content": {
        "resourceType": "allergyIntolerance",
        "recordedDate": "@DATE_YYYY-@DATE_MM-@DATE_DD",
        "status": "confirmed",
        "sensitivityType": "@ALLERGY_SENSITIVITY",
        "criticality": "@ALLERGY_CRITICALITY",
        "identifier|1-4": [
          {
            "value": "@NUM_3",
            "use": "@ID_USE"
          }
        ],
        "subject": {
          "reference": "patient/@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER",
          "display": "John Appleseed"
        },
        "substance": {
          "reference": "substance/@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER",
          "display": "@ALLERGY_SUBSTANCE"
        },
        "reaction|1-3": [
          {
            "reference": "/AdverseReaction/@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER",
            "display": "@ALLERGY_REACTION"
          },
          {
            "reference": "/AdverseReaction/@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER",
            "display": "@ALLERGY_REACTION"
          }
        ]
      }
    }
  ]
}
]
}

/** end sample allergyIntolerance resource **/

/** Begin sample medicationPrescription resource **/
var medications = {
        "medicationPrescription|2-2":[
{
  "resourceType": "Bundle",
  "entry|2-5": [
    {
      "title": "Entry for MedicationPrescription",
      "id": "medicationPrescription/@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER",
      "updated": "2015-@DATE_MM-@DATE_DD T13:10:28",
      "published": "2015-@DATE_MM-@DATE_DD T13:10:28",
      "content": {
        "resourceType": "MedicationPrescription",
        "dateWritten": "@DATE_YYYY-@DATE_MM-@DATE_DD T13:10:28",
        "status": "@RX_STATUS",
        "identifier|1-2": [
          {
            "value": "895520",
            "system": "urn:oid:1.2.840.114350.1.13.327.1.7.2.798268",
            "use": "usual"
          },
          {
            "value": "895520OID327",
            "system": "urn:oid:1.2.840.114350.1.13.327.1.7.3.798268.801",
            "use": "usual"
          }
        ],
        "patient": {
          "reference": "patient/@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER",
          "display": "John Appleseed"
        },
        "prescriber": {
          "reference": "Practitioner/@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER"
        },
        "medication": {
          "reference": "medication/@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER",
          "display": "@RX_DISPLAY"
        },
        "dosageInstruction": [
          {
            "text": "Take 250 mg by mouth daily.",
            "route": {
              "text": "Oral",
              "coding|1-1": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.327.1.7.4.698288.330",
                  "code": "15",
                  "display": "Oral",
                  "primary": false
                }
              ]
            },
            "doseQuantity": {
              "value": "240",
              "system": "urn:oid:1.2.840.114350.1.13.327.1.7.4.696784.9010",
              "code": "3"
            },
            "timingSchedule": {
              "repeat": {
                "frequency|1-3": 0,
                "duration|1-3": 0,
                "units": "d",
                "end": "0001-01-01T00:00:00",
                "count|0-1": 0
              },
              "event|1-1": [
                {
                  "start": "2013-@DATE_MM-@DATE_DD"
                }
              ]
            }
          }
        ],
        "dispense": {
          "numberOfRepeatsAllowed|0-3": 0,
          "quantity": {
            "value": 250,
            "system": "urn:oid:1.2.840.114350.1.13.327.1.7.4.696784.9010",
            "code": "5002"
          }
        }
      }
    }
  ]
},
{
  "resourceType": "Bundle",
  "entry|2-5": [
    {
      "title": "Entry for MedicationPrescription",
      "id": "medicationPrescription/@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER",
      "updated": "2015-@DATE_MM-@DATE_DD T13:10:28",
      "published": "2015-@DATE_MM-@DATE_DD T13:10:28",
      "content": {
        "resourceType": "MedicationPrescription",
        "dateWritten": "@DATE_YYYY-@DATE_MM-@DATE_DD T13:10:28",
        "status": "@RX_STATUS",
        "identifier|1-2": [
          {
            "value": "895520",
            "system": "urn:oid:1.2.840.114350.1.13.327.1.7.2.798268",
            "use": "usual"
          },
          {
            "value": "895520OID327",
            "system": "urn:oid:1.2.840.114350.1.13.327.1.7.3.798268.801",
            "use": "usual"
          }
        ],
        "patient": {
          "reference": "patient/@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER",
          "display": "Carlton Lasseter"
        },
        "prescriber": {
          "reference": "Practitioner/@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER"
        },
        "medication": {
          "reference": "medication/@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER-@NUM_3@LETTER_LOWER@NUM_4@LETTER_LOWER",
          "display": "@RX_DISPLAY"
        },
        "dosageInstruction": [
          {
            "text": "Take 250 mg by mouth daily.",
            "route": {
              "text": "Oral",
              "coding|1-1": [
                {
                  "system": "urn:oid:1.2.840.114350.1.13.327.1.7.4.698288.330",
                  "code": "15",
                  "display": "Oral",
                  "primary": false
                }
              ]
            },
            "doseQuantity": {
              "value": "240",
              "system": "urn:oid:1.2.840.114350.1.13.327.1.7.4.696784.9010",
              "code": "3"
            },
            "timingSchedule": {
              "repeat": {
                "frequency|1-3": 0,
                "duration|1-3": 0,
                "units": "d",
                "end": "0001-01-01T00:00:00",
                "count|0-1": 0
              },
              "event|1-1": [
                {
                  "start": "2013-@DATE_MM-@DATE_DD"
                }
              ]
            }
          }
        ],
        "dispense": {
          "numberOfRepeatsAllowed|0-3": 0,
          "quantity": {
            "value": 250,
            "system": "urn:oid:1.2.840.114350.1.13.327.1.7.4.696784.9010",
            "code": "5002"
          }
        }
      }
    }
  ]
}
]
}


/** End sample medicationPrescription resource **/

    
    $('#template textarea').val(formatJSON(patient));
    $('#result textarea').val(''); // reset
    
    $('#button-template1').click(function() {
        $('#template textarea').val(formatJSON(patient));
        $('#button-generate').click();
    });

    $('#button-template2').click(function() {
        $('#template textarea').val(formatJSON(allergies));
        $('#button-generate').click();
    }); 

    $('#button-template3').click(function() {
        $('#template textarea').val(formatJSON(medications));
        $('#button-generate').click();
    }); 
    
/*    $('#button-template2').click(function() {
        $('#template textarea').val(formatJSON(template2));
        $('#button-generate').click();
    }); */


    
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


