(function($) {

var _mocked = [];
$.mockJSON = function(request, template) {
    for (var i = 0; i < _mocked.length; i++) {
        var mock = _mocked[i];
        if (mock.request.toString() == request.toString()) {
            _mocked.splice(i, 1);
            break;
        }
    }

    _mocked.push({
        request:request,
        template:template
    });
    
    return $;
};

$.mockJSON.random = false;


var _original_ajax = $.ajax;
$.ajax = function(options) {
    if (options.dataType === 'json') {
        for (var i = 0; i < _mocked.length; i++) {
            var mock = _mocked[i];
            if (mock.request.test(options.url)) {
                options.success($.mockJSON.generateFromTemplate(mock.template));
                return $;
            }
        }
    }
    
    return _original_ajax.apply(this, arguments);
}


$.mockJSON.generateFromTemplate = function(template, name) {
    var length = 0;
    var matches = (name || '').match(/\w+\|(\d+)-(\d+)/);
    if (matches) {
        var length_min = parseInt(matches[1], 10);
        var length_max = parseInt(matches[2], 10);
        length = Math.round(rand() * (length_max - length_min)) + length_min;
    }
        
    var generated = null;
    switch (type(template)) {
        case 'array':
            generated = [];
            for (var i = 0; i < length; i++) {
                generated[i] = $.mockJSON.generateFromTemplate(template[0]);
            }
            break;

        case 'object':
            generated = {};
            for (var p in template) {
                generated[p.replace(/\|(\d+-\d+|\+\d+)/, '')] = $.mockJSON.generateFromTemplate(template[p], p);
                var inc_matches = p.match(/\w+\|\+(\d+)/);
                if (inc_matches && type(template[p]) == 'number') {
                    var increment = parseInt(inc_matches[1], 10);
                    template[p] += increment;
                }
            }
            break;

        case 'number':
            generated = (matches)
                ? length
                : template;
            break;

        case 'boolean':
            generated = (matches)
                ? rand() >= 0.5
                : template;
            break;

        case 'string':
            if (template.length) {
                generated = '';
                length = length || 1;
                for (var i = 0; i < length; i++) {
                    generated += template;
                }
                var keys = generated.match(/@([A-Z_0-9\(\),]+)/g) || [];
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    var randomData = getRandomData(key);
                    generated = generated.replace(key, randomData);
                    if (type(randomData) == 'number')
                        generated = Number(generated);
                }
            } else {
                generated = ""
                for (var i = 0; i < length; i++) {
                    generated += String.fromCharCode(Math.floor(rand() * 255));
                }
            }
            break

        default:
            generated = template;
            break;
    }
    return generated;

}


function getRandomData(key) {
    key = key.substr(1); // remove "@"
    
    //var params = key.match(/\(((\d+),?)+\)/g) || [];
    var params = key.match(/\(([^\)]+)\)/g) || [];
    
    if (!(key in $.mockJSON.data)) {
        console.log(key);
        console.log(params);
        return key;
    }
    
    var a = $.mockJSON.data[key];
    
    switch (type(a)) {
        case 'array':
            var index = Math.floor(a.length * rand());
            return a[index];
            
        case 'function':
            return a();
    }
}


function type(obj) {
    return $.isArray(obj)
        ? 'array' 
        : (obj === null)
            ? 'null'
            : typeof obj;
}


function pad(num) {
    if (num < 10) {
        return '0' + num;
    }
    return num + '';
}

var _random_numbers = [0.021768910889510606,0.23762323165420307,0.9079616118204306,0.6534305309997466,0.22049697572443694,0.07687466163364898,0.8017428775547905,0.16165353264404825,0.5124345671670483,0.19337327636624613,0.39963994200698416,0.8012592654139514,0.22474962687229938,0.9791396234452399,0.7965428353317756,0.9777664340629622,0.5135216702983731,0.7407128236192145,0.12880984991420075,0.8186600800491484,0.5187691445438851,0.034723021925916586,0.5625092833040853,0.02502838571997701,0.663696305503698,0.3481608684353138,0.8991623585175106,0.3640542564277087,0.8320766874121723,0.012778915627689846,0.1427680370061336,0.9774408289203956,0.010229381207667587,0.2596610885223093,0.6150540104297127,0.7130773919030915,0.8638338302974085,0.6178483032907357,0.980312844391733,0.5007277415012348,0.6348672031113127,0.4400097775503303,0.8468458451408212,0.38724997893647317,0.690237920987028,0.19850102297146477,0.44895115941315766,0.22283381913760725,0.031228117310125314,0.3367510872581615,0.28155752394210787,0.14696694832580504,0.08164635161760991,0.8837733477785624,0.4590179148539142,0.9613195413217465,0.11263127577456922,0.743695635896287,0.0002424891439143373,0.1964622832546613,0.7333363138878922,0.5575568682003356,0.20426374168098604,0.18030934250338893,0.9792636408392759,0.30121911048336913,0.7734906886720265,0.6984051127767527,0.6638058511379343,0.3310956256388182,0.36632372827973203,0.8996494702333895,0.8235917663049763,0.418496734118911,0.8164648495097332,0.9457831606354686,0.2845227542117049,0.42374718399151545,0.3431728911657228,0.5289314006219973,0.6029243600407113,0.6528301140700757,0.6948768236197832,0.7887302784092911,0.8950274196119906,0.6121642239166305,0.31797481561514696,0.34903732589844216,0.3580320092281766,0.8312225728434115,0.32331010157206974,0.16395388672837796,0.6072960306003872,0.6580526967999424,0.23472961545632742,0.6138637855489343,0.3067303339060682,0.44935935129958315,0.24729465243280668,0.8244189715967711];
function rand() {
    if ($.mockJSON.random) {
        return Math.random();
    } else {
        _random_numbers = _random_numbers.concat(_random_numbers.splice(0,1));
        return _random_numbers[0];
    }
}


function randomDate() {
    return new Date(Math.floor(rand() * new Date().valueOf()));
}


$.mockJSON.data = {
    NUMBER : "0123456789".split(''),
    NUM_3 : function() {
        return rand().toString().slice(2,5);
        }, 
    NUM_4 : function() {
        return rand().toString().slice(3,7);
        }, 
    NUM_6 : function() {
        return rand().toString().slice(3,10);
        }, 
    LETTER_UPPER : "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
    LETTER_LOWER : "abcdefghijklmnopqrstuvwxyz".split(''),
    PATIENT_ID : ["d4033832-ff62-4dd2-9465-e09a73f9683f","5b737a3c-55b0-480e-9912-447798c1fecb","1968b914-80ed-4c3e-bdd4-dd7cb8387628",
    "676cbb3f-9676-4387-aded-fb39b01c8254","abce1405-4300-46bc-acc9-dcbc548857a0","c60184b6-43bd-4ac6-921c-296c44823201",
    "8cc95829-996a-4f3e-9a6f-f9e65cae96ed","5dcac11e-b384-4cc8-9c7f-794005c41ba8","228c714a-ed54-4a8f-b5cb-bdc923c763b6",
    "0906b342-a9c0-492b-8c4a-98f24ac543de","3d807893-5bdd-4cb4-a995-f7f8d7ee5318","a2a05493-1a87-475e-9686-176ac2ccab7c",
    "68c1ed91-90c0-4be6-b6f8-e68a7d7d0be4","2dcad0dd-4bda-4ecd-865d-64ec168973d2","88d3192c-fb99-4373-8a57-80c3a2fad371",
    "dae6b4f3-5bdb-4e97-a640-90d571e28907","0aedd6e8-0649-4a02-a80d-f89b1c405079","6b8d3795-c74a-4793-9e01-de47fb7c093f",
    "f767de41-abfa-402c-b42a-cfa6eebf149b","4c731bd6-456f-4171-b757-db091b84660b"],
    ORG_ID : ["ce7509ca-bdc3-4198-b802-99845fd6d06d","2a6fbe28-a851-44cb-b54e-77c1eadc2475","7448b2c0-c954-4cd4-9de8-0fdd4ce43256",
    "1aab6b97-c5a2-42ce-a3e8-d68e7b5c434b","1bbf798f-e2a4-4539-bede-63f38f02d8a4"],
    PROVIDER_ID : ["b7c2de52-3f38-4879-ad55-d3f67b3ecc4c","c8e23a8a-cd7d-48d3-94c8-642f6c3af6ed","151372a1-f19e-4e8f-8b01-ab7bbcc5facc",
    "63971402-1e4a-4e68-804c-9c2ca3016216","62336170-e145-40d1-8800-563180c81c3d","6d3d41a4-bc59-49ba-bf5d-23e25a3622e8",
    "97905b6a-0145-462c-ae56-314e0ed84a6d","bcd694c7-f3d1-4334-9d27-22f03bf255a6","add4de50-e32f-4d17-a9a2-4c9141cd3bc6",
    "885da4f1-07f6-43ae-96b6-54ffc6d0d759"],
    ALLERGY_ID : ["bed629a8-0418-4f84-83bb-606882e81654","7a4e982e-863e-41c3-b67a-4fbb3cf727b5","ef47e766-b65e-4693-a2d1-9e354d56f2fa",
    "c75505bb-e20f-44ea-9a85-7df338e8008d","1ad2d3eb-971e-434c-b555-0cc084bf106c","bc3ee3a5-c64c-4224-8f1d-1a1fac53015b",
    "389dc36d-9768-49b7-a0cd-7bb8968ddc59","c274c407-dfda-423a-aa1a-7bef6c7eb113","dce1a699-85e5-4275-af12-6a53843638a6",
    "68f971bb-8b3a-4bb7-9973-c5ecb245c856","bed8fc20-a59c-4bd8-b5a3-f5446c32102e","d576440b-fcf1-41be-9fa5-7966a7e7cff7",
    "98cfeedb-2f6a-4863-bec2-bf495b18ec43","2c5c38a4-d798-42fe-b9ff-b2bb8f81a485","80fecdba-d621-4317-b21d-e3ca733c3960",
    "a26dee4d-c521-45d7-9ca8-1da567f7873e","6bf9e863-1c76-405f-bd5f-894782d84ecc","be94d81d-decc-4343-be70-84589ca319b9",
    "d8425389-5c11-4011-96fb-8848f2045c34","1322a41e-3b00-408a-8875-35938241d728"],
    SUBSTANCE_ID :["b92f21a9-d953-4c2b-83ec-7f79d1e9ea40","a19e18a1-6ea1-45b5-9006-aa5a10c2d410","be58833d-da2b-45da-bcaf-cac9d9a76cc4",
    "6558292e-d308-4742-9be0-53a5d42472ba","926ac122-145c-4285-b081-e7f5a1746ea9","5020f13e-464d-4cda-ace2-0ba2466e38dc",
    "ad79760b-64e6-4b46-9abc-b77811e23398","62f84d0d-b454-463d-a117-2abf6e06189e","9b1d3be5-8e26-4b7f-93e5-23ddf09bf52b",
    "6b876277-086a-447a-9685-f4713944e851"],
    MEDRX_ID : ["e392da8c-1e4a-48aa-96e7-b1999d20cbf6","0c59d40c-838f-4f6e-81c2-991519c98561","9d9aa8a1-23e6-4f1e-81e5-0c862130dc25",
    "762b25af-3087-4883-af9c-b26a40423ca6","6aec8b79-ee0e-484b-b083-cd9e09ce8598","388c357c-7abc-4bdb-8364-c7a65e306d1c",
    "61604e6e-7d4b-4856-8097-373430602004","80a24d67-0378-4317-be4d-c2f6b3bc6e39","1ad6b48e-dd24-4cbf-8536-4fbf0dbec00e",
    "e59f4f13-c29d-4662-8cfe-d650e7f5d678","4ca648b4-470b-4fdb-b3f1-6c8ec53097b2","9508c707-ef5d-45e5-81c9-7d1a256acb1c",
    "c4f035c2-07b9-4e75-9543-aeb5faf55cb9","f8a6a9a5-2257-40cc-9b1f-b168b7bcc673","091fb2c1-feea-4ff8-9d8b-8d363a620911",
    "d2077470-a6d1-4e06-9646-f2de972a9989","87eb1b75-fa02-4bf4-b83d-39b2532744ce","50279867-8ace-468a-bc12-97e20ce3e5a2",
    "cfe3a742-2ab8-4977-8297-c035a48a1c6a","1c8d3f5e-8176-458c-954f-b7b847565095"],
    ADVERSE_ID : ["5d14ea0f-6e2c-42d0-881f-cdfc73571b06","58aa7458-89a7-45d0-9681-d25dc38d449a","7063be9c-b852-41d9-bde7-1b2722fc5fc7",
    "1168ad5b-3d77-4fd9-8bb4-20170d43744b","47404c6a-cc2e-4575-9674-5668e8d8b6cc","9c7f9a3a-822a-4c74-b0f9-c26c162a6858",
    "cdda0bf2-07f4-407c-9621-0882e2c54fd3","9d94583a-29d7-47f4-a24c-62631cb6e3b5","ad5aaa54-010c-47e1-b9bb-d536038ac9ac",
    "ebe6130a-e5ed-44a6-bce1-e9dcf7b593b3"],
    MED_ID :["5ebfec50-49ad-4840-a914-57f8c9da1815","e7ca8ca9-2946-48dc-9f9d-392f8db4fd5a","c5e50600-db08-420b-945e-0c6d171d4144",
    "93943bff-b2ba-4125-a128-d0cc06772a62","23b3d94d-4f2d-43ab-b954-9cac42effa30","1a71b545-e495-4196-af6b-dcf1ffc9dba8",
    "786eefc0-bde5-4715-a965-503e3769579f","9759595a-e82a-4ff1-bb5c-b9d4b93bb7d9","22a3e091-448c-427a-9215-0ba150d7ec53",
    "3c64d504-9290-455c-a359-e518fee128bb"],
    CONTACT_TYPE : ["PATINF", "PRESS"],
    MALE_FIRST_NAME : ["James", "John", "Robert", "Michael", "William", "David",
        "Richard", "Charles", "Joseph", "Thomas", "Christopher", "Daniel", 
        "Paul", "Mark", "Donald", "George", "Kenneth", "Steven", "Edward",
        "Brian", "Ronald", "Anthony", "Kevin", "Jason", "Matthew", "Gary",
        "Timothy", "Jose", "Larry", "Jeffrey", "Frank", "Scott", "Eric"],
    FEMALE_FIRST_NAME : ["Mary", "Patricia", "Linda", "Barbara", "Elizabeth", 
        "Jennifer", "Maria", "Susan", "Margaret", "Dorothy", "Lisa", "Nancy", 
        "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon",
        "Michelle", "Laura", "Sarah", "Kimberly", "Deborah", "Jessica", 
        "Shirley", "Cynthia", "Angela", "Melissa", "Brenda", "Amy", "Anna"], 
    LAST_NAME : ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller",
        "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson",
        "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson",
        "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark",
        "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen"],
    MARITAL_STATUS :["Married", "Single", "Unknown"],
    ETHNICITY : ["Caucasian", "African American", "Asian", "Other"],
    RACE : ["Caucasian", "African American", "Asian", "Other"],
    STATES : ["California","Texas","Wisconsin","New York","Pennsylvania"],
    ID_USE : ["usual", "official"],
    ID_LABEL: ["MRN", "SSN", "DL"],
    NAME_USE : ["usual", "official"],
    TEL_USE : ["home", "work", "mobile"],
    ADDR_USE: ["home", "work"],
    ALLERGY_CRITICALITY: ["fatal","high","medium","low"],
    ALLERGY_SENSITIVITY: ["allergy","intolerance","unknown"],
    ALLERGY_SUBSTANCE: ["Bee Pollen", "Penicillin", "NEED MORE TBD"],
    ALLERGY_REACTION: ["Hives", "Swelling", "NEED MORE TBD"],
    RX_STATUS: ["active","suspended"], //full list includes "on hold","completed","entered in error","stopped","superceded"
    RX_DISPLAY: ["DILTIAZEM 240 MG ER capsule","LEVOTHYROXINE 100 MCG tablet","SIMVASTATIN 40 MG tablet"],
    ZIP : function() {
        return rand().toString().slice(3,8);
        }, 
    RELATIONSHIP : ["Spouse", "Partner"],
    BP_DIA_NORM : function () {
        return Math.round(rand()*(79 - 60)) + 60;
    },
    BP_SYS_NORM : function () {
        return Math.round(rand()*(119 - 90)) + 90;
    },
    BMI_NORM : function () {
        return Math.round(rand()*(25 - 18.5)) + 18.5;
    },
    EMAIL : function() {
        return getRandomData('@LETTER_LOWER')
            + '.'
            + getRandomData('@LAST_NAME').toLowerCase()
            + '@'
            + getRandomData('@LAST_NAME').toLowerCase()
            + '.com';
    },
    DATE_YYYY : function() {
        var yyyy = randomDate().getFullYear();
        return yyyy + '';
    },
    DATE_DD : function() {
        return pad(randomDate().getDate());
    },
    DATE_MM : function() {
        return pad(randomDate().getMonth() + 1);
    },
    TIME_HH : function() {
        return pad(randomDate().getHours());
    },
    TIME_MM : function() {
        return pad(randomDate().getMinutes());
    },
    TIME_SS : function() {
        return pad(randomDate().getSeconds());
    },
    LOREM : function() {
        var words = 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Eiusmod Tempor Incididunt Labore Dolore Magna Aliqua Minim Veniam Quis Nostrud Exercitation Ullamco Laboris Aliquip Commodo Consequat Dolor Reprehenderit Voluptate Velit Esse Cillum Dolore Fugiat Nulla Pariatur Excepteur Sint Occaecat Cupidatat Non Proident Culpa Officia Deserunt Mollit Laborum'.split(' ');
        var index = Math.floor(rand() * words.length);
        return words[index];
    },
    LOREM_IPSUM : function() {
        var words = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'.split(' ');
        var result = [];
        var length = Math.floor(rand() * words.length / 2);
        for (var i = 0; i < length; i++) {
            var index = Math.floor(rand() * words.length);
            result.push(words[index]);
        }
        return result.join(' ');
    }
};


})(jQuery);
