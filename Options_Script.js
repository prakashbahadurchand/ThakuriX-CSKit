
// Init Variables From UI or Required
// let secretInputSwitch, secretInputText;
// let checkboxAutoIncrementRegNumber;
// let selectAutoScrollScanImage;
// let checkboxAutoCopyCurrentEvent;
// let checkboxSkipPrefilledInputs;

// let textAreaMiddleNames

// let buttonSaveAllOptions;
// let buttonClearAllSaved;

// // Setup Listener
// document.addEventListener('DOMContentLoaded', function() {

//   // Initialize Variables
//     secretInputSwitch = document.getElementById('secret_input_switch');
//     secretInputText = document.getElementById('secret_input_text');
//     checkboxAutoIncrementRegNumber = document.getElementById('checkbox_auto_increment_reg_number');
//     selectAutoScrollScanImage = document.getElementById('select_scroll_image_sensitivity');
//     checkboxAutoCopyCurrentEvent = document.getElementById('checkbox_auto_copy_current_event');
//     checkboxSkipPrefilledInputs = document.getElementById('checkbox_skip_prefilled_inputs');

//     textAreaMiddleNames = document.getElementById('taListMiddleNameReplacement');
    
//     buttonSaveAllOptions = document.getElementById('button_save_all_options');
//     buttonClearAllSaved = document.getElementById('button_clear_all_options');

//     buttonSaveAllOptions.addEventListener('click', saveAllOptions);
//     buttonClearAllSaved.addEventListener('click', clearOptions);
//     //InitOptions();
// });

//   // Remove/Clear All Options
// function clearOptions() {
//     chrome.storage.local.clear(function(){});
// }

//     // Save All Options
// function saveAllOptions() {
//         chrome.storage.local.set({'options_auto_increment_registration_number' : checkboxAutoIncrementRegNumber.checked});
//         chrome.storage.local.set({'options_auto_scroll_scan_image' : selectAutoScrollScanImage.selectedIndex});
//         chrome.storage.local.set({'options_auto_copy_current_event' : checkboxAutoCopyCurrentEvent.checked});
//         chrome.storage.local.set({'options_skip_prefilled_inputs' : checkboxSkipPrefilledInputs.checked});
        
//         chrome.storage.local.set({'options_middle_names_text': textAreaMiddleNames.value});
// }
  
//   // Restore Options
//   function InitOptions() {
//     chrome.storage.local.get(['options_auto_increment_registration_number'], function(result) {
//       checkboxAutoIncrementRegNumber.checked = result.options_auto_increment_registration_number;
//     });

//       chrome.storage.local.get(['options_auto_scroll_scan_image'], function(result) {
//           selectAutoScrollScanImage.value = result.options_auto_scroll_scan_image;
//       });

//       chrome.storage.local.get(['options_auto_copy_current_event'], function(result) {
//           checkboxAutoCopyCurrentEvent.checked = result.options_auto_copy_current_event;
//       });

//       chrome.storage.local.get(['options_skip_prefilled_inputs'], function(result) {
//           checkboxSkipPrefilledInputs.checked = result.options_skip_prefilled_inputs;
//       });

//       secretInputSwitch.addEventListener('click', function() {
//           if (secretInputText.value === '') {
//               secretInputText.style.display = "block";
//           } else {
//               chrome.storage.local.set({'digitization' : secretInputText.value.trimEnd()});
//               secretInputText.remove();
//               secretInputSwitch.remove();
//           }

//       });

//   }


