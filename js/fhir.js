(function($) {
        
$(document).ready(function() {

    /** start sample FHIR patient resource **/
    var patient = {
        "patients|5-5":[
{
  "resourceType": "Patient",
  "text": {
    "status": "generated"
    /*"div": "<div>/\n      
    <table>/\n <tbody>/\n <tr>/\n            
      <td>Name</td>/\n <td>John Samuel <b>Appleseed</b> (&quot;John&quot;)</td>/\n          
    </tr>/\n <tr>/\n <td>Address</td>/\n            
    <td>1231 </td>/\n </tr>/\n <tr>/\n            
    <td>Contacts</td>/\n <td>Home: unknown. Work: (03) 5555 6473</td>/\n          
</tr>/\n <tr>/\n <td>Id</td>/\n            
<td>MRN: 12345 (Acme Healthcare)</td>/\n </tr>/\n        
</tbody>/\n </table>/\n </div>"*/
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



    
    $('#template textarea').val(formatJSON(patient));
    $('#result textarea').val(''); // reset
    
    $('#button-template1').click(function() {
        $('#template textarea').val(formatJSON(patient));
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


