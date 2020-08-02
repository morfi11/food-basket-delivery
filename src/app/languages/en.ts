import { Language } from "../translate";
export class en implements Language {
  assignDeliveryMenu = 'Assign Volunteer';
  defaultOrgName = "My organization's name";
  defaultSmsText = 'Hello !VOLUNTEER!\nTo deliver parcels for !ORG! Click: !URL!\nThanks !SENDER!';
  reminderSmsText = 'Hello !VOLUNTEER!,\nPlease update the Application with the Delivery status of the parcels. To update click on: !URL!\nThank you !ORG!';
  commentForSuccessDelivery = 'Kindly describe your experience';
  commentForSuccessLeft = 'Please specify where you left the parcel and with whom you spoke';
  commentForProblem = 'Kindly describe your experience';
  messageForDoneDelivery = "Thanks for all the help, we'd love to volunteer again";
  deliveredButtonText = 'Parcel Delivered Successfully';
  boxes1Name = 'Boxes';
  boxes2Name = 'Other unit';
  defaultDistributionListName = 'Food Distribution List';
  AssignEscortComponent = 'Escort assignment';
  FamilyDeliveriesComponent = 'Active Deliveries';
  FamiliesComponent = 'Families';
  DeliveryFollowUpComponent = 'Volunteer Tracking';
  NewsComponent = 'Requires Followup';
  DistributionMapComponent = 'Distribution map';
  OverviewComponent = 'Overview';
  HelpersComponent = 'Volunteers';
  DeliveryHistoryComponent = 'Delivery History';
  PlaybackComponent = 'A distribution video';
  GeocodeComponent = 'GEOCODE';
  ImportFromExcelComponent = 'Families Excel Import';
  ImportHelpersFromExcelComponent = 'Volunteers Excel Import';
  DuplicateFamiliesComponent = 'Possible Duplicates';
  ManageComponent = 'System settings';
  MyFamiliesComponent = 'My families';
  UpdateInfoComponent = 'Personal settings';
  LoginComponent = 'Sign in';
  RegisterComponent = 'Register';
  copyright = 'Hagai - an app for distributing food parcels';
  exit = 'Sign Out';
  hello = 'Hello';
  escoring = 'Accompanied by';
  clickForTutorialVideo = 'For a short tutorial video, click here';
  cancelAllAssignments = 'Cancel all assignments';
  markAllDeliveriesAsSuccesfull = 'Mark "successfully delivered" to all deliveries';
  estimatedTravelTime = 'Estimated total travel time';
  minutes = 'minutes';
  km = 'km';
  leftDeliveryNextToHouse = 'Parcel left outside';
  failedDeliveries = 'Not Delivered';
  ranIntoAProblem = 'Problem Encountered';
  showAllDeliveries = 'View all deliveries for distribution';
  sendSmsWithLink = 'Send an SMS with a link';
  sendLinkOnWhatsapp = 'Send on WhatsApp';
  copyMessageWithLink = 'Copy message with link';
  copyLink = 'Copy link';
  sendSmsFromDevice = 'Send an SMS link from your phone';
  reminderSent = 'Reminder sent';
  resendReminder = 'send again';
  sendReminderSms = 'SMS reminders';
  callPerson = 'Call';
  callEscort = 'Call escort';
  family = 'Family';
  address = 'Address';
  phones = 'Phones';
  phone = 'Phone';
  thereAre = 'there is';
  basket = 'Parcel';
  notice = 'Note!';
  floor = 'Floor';
  appartment = 'Apartment';
  entrance = 'Entrance';
  updateComment = 'Update Comment';
  clickedByMistake = 'Accidentally clicked - return to Assigned Deliveries';
  deliveriesDoneInTheLastTwoDays = 'Delivered over the last two days';
  showAllCompletedDeliveries = 'View all successful deliveries';
  showRouteOnGoogleMaps = 'View route on google maps';
  selfPuckupSuccess = 'Collect the package';
  packageWasPickedUp = 'Collected';
  cancelAsignment = 'Cancel assignment';
  deliveryDetails = 'Delivery Details';
  repeatFamilyNotice = "You've been to this family before too";
  inacurateAddress = 'Notice, Inaccurate Address!';
  copyAddress = 'Copy address';
  SelfPickupComponent = 'Come and take';
  oneDeliveryToDistribute = 'One delivery for distribution';
  deliveriesToDistribute = 'Assigned Deliveries';
  volunteerInfo = 'Volunteer details';
  assignRequiresADistributionList = 'Please select a distribution list (from the selection box at the top right corner) before assigning deliveries.';
  findHelperByName = 'Search by Name';
  clearHelperInfo = 'Clear volunteer details';
  saveHelperInfoAndMoveToNextHelper = 'Save volunteer details and go to the next volunteer';
  showHelperCompany = 'Display Volunteer Company';
  hideHelperCompany = 'Hide a volunteer company';
  volunteerPhoneNumber = "Volunteer's phone number";
  assignHelpText = "Please type volunteer's phone and name to start delivery assignment, you can also search volunteer by name, by clicking on ";
  asignVideoHelp = 'For a tutorial on delivery assignment and distribution event click here';
  asignDeliveriesTo = 'Assign Deliveries to';
  familyGroups = 'Family affiliation groups';
  allGroups = 'All family groups';
  distributionCity = 'A city for distribution';
  allCities = 'All cities';
  region = 'Area';
  allRegions = 'All Areas';
  basketType = 'Parcel type';
  numOfFamilies = 'Several families';
  prioritizeRepeatFamilies = 'Priority for returning families';
  inProgress = 'working on it...';
  noDeliveriesLeft = 'No suitable deliveries left';
  asignClosestDelivery = 'Assign Nearest Delivery';
  asignAnyDelivery = 'Assign any Delivery';
  addAllRepeatFamilies = 'Add all repeat families';
  specialFamilies = 'Special families';
  selectDeliveryByName = 'Assign Delivery by Name';
  selectDeliveryOnMap = 'Assign Delivery on Map';
  selectDeliveryByStreet = 'Assign Delivery by Address';
  transferDeliveriesFromOtherVolunteer = 'Transfer families from another volunteer';
  replanRoute = 'Recalculate route';
  isDefinedAsEscortOf = 'Defined as a lender of';
  displayFamiliesOf = 'Will showcase the families of';
  allBaskets = 'All parcels';
  transfer = 'to convey';
  deliveriesFrom = 'deliveries from';
  toVolunteer = 'To the volunteer';
  atThisLocationThereAre = 'This location has';
  deliveriesAssignAllOfThem = 'Deliveries - assign them all?';
  thereAreAdditional = 'There are more';
  deliveriesAtSameAddress = 'delivery at the same address, do they also belong?';
  noMatchingDelivery = 'No suitable family found';
  deliveriesAssigned = 'deliveries are assigned';
  confirmPassword = 'Confirm password';
  passwordDoesntMatchConfirmPassword = 'The password does not match the password confirmation';
  updateSaved = 'The update was saved, thanks';
  volunteerName = 'Name';
  nameIsTooShort = 'The name is too short';
  smsDate = 'SMS delivery date';
  helperComment = 'Note';
  needEscort = 'Need a companion';
  assignedDriver = 'assigned driver';
  escort = 'accompanied';
  alreadyExist = 'Already exists';
  password = 'password';
  createDate = 'Creation Date';
  remiderSmsDate = 'Date of delivery of SMS reminder';
  admin = 'System administrator';
  lab = 'Laboratory worker';
  responsibleForAssign = 'Only Assigns Deliveries';
  notAllowedToUpdateVolunteer = 'You may not update for this volunteer';
  company = 'Company';
  updateInfo = 'Update details';
  organizationName = 'The organization name';
  smsMessageContentCaption = 'SMS message content';
  smsReminderMessageContentCaption = 'SMS reminder content';
  mustIncludeUrlKeyError = ' Must contain!';
  logoUrl = 'URL logo';
  deliveryCenterAddress = 'delivery center address';
  successMessageColumnName = 'Message to volunteer when delivered successfully';
  leftByDoorMessageColumnName = 'Message for volunteer that has left outside';
  problemCommentColumnName = 'Notify the volunteer when there is a problem';
  messageForVolunteerWhenDoneCaption = 'Notification to volunteer when all families are finished';
  helpName = 'alternative name';
  helpPhone = 'Alternate Phone';
  successButtonSettingName = 'Button text delivered successfully';
  freeText1ForVolunteer = 'Free text 1 for volunteer';
  urlFreeText1 = 'Free volunteer 1 web address for volunteer';
  showText1OnlyWhenDone = 'Display free text 1 only when the volunteer has finished all parcels';
  freeText2ForVolunteer = 'Free text 2 for volunteer';
  urlFreeText2 = 'Free volunteer text URL 2 for volunteer';
  showText2OnlyWhenDone = 'Display free text 2 only when the volunteer has finished all parcels';
  enableSelfPickupModule = 'There are families who come to take from the division center';
  enableLabReception = 'Delivery ends after absorption in the laboratory';
  showVolunteerCompany = 'Save on behalf of which company the volunteer came from';
  activateEscort = 'Enable driver escort management';
  showHelperComment = 'Save note to volunteer';
  filterFamilyGroups = 'Group Filtering';
  filterCity = 'City filtering';
  filterRegion = 'Area filtering';
  filterBasketType = 'Parcel Type Filtering';
  selectNumberOfFamilies = 'Set Number of Delivery';
  showLeftByHouseButton = "Show 'left outside' button to volunteer";
  redTitleBar = 'Red page title';
  defaultPhonePrefixForExcelImport = 'Default phone prefix for import from Excel';
  checkIfFamilyExistsInDb = 'Check if a family already exists in the database';
  checkIfFamilyExistsInFile = 'Check if a family already exists in the Excel file';
  excelImportAutoAddValues = 'Add values to the infrastructure tables without asking';
  checkDuplicatePhones = 'Check duplicate phone numbers';
  defaultStatusType = 'Default delivery status for new families';
  boxes1NameCaption = 'Parcel type name for boxes';
  boxes2NameCaption = 'Parcel type name for other unit';
  assignerOrOrg = 'Help phone';
  familyHelpPhone = 'Clarification Contact';
  familySourcePhone = 'Telephone turning point';
  otherPhone = 'another phone';
  RemovedFromListExcelImportStrategy_displayAsError = 'View as error';
  RemovedFromListExcelImportStrategy_showInUpdate = 'View in families for update';
  RemovedFromListExcelImportStrategy_ignore = 'Ignore and add a new family';
  existsInRemovedFromListStrategy = 'What to do if a matching family is found to be excluded from the lists';
  organizationInfo = 'Organization details';
  defaultHelpPhone = 'Help Phone Name';
  defaulyHelpPhoneExplanation = 'By default, the person who assigned the delivery, will be the person that the volunteer can call for help. Specify a different value here, if you prefer another help phone number';
  smsTextHelpTitle = 'This message will be sent to a volunteer from the Assign Volunteer screen - with the link to the families it is asked to share.';
  replacedByVolunteerName = 'The name of the volunteer will be replaced';
  replcaedBySenderName = "The sender's name will be replaced";
  replacedByOrgName = 'Will be replaced on behalf of the organization';
  deliveriesFor = 'deliveries for';
  archiveCurrentDelivery = 'Archive current delivery';
  familySelfPickup = 'Self Pickup, no delivery required?';
  newDeliveryFor = 'New delivery to';
  familyAlreadyHasAnActiveDelivery = 'This family already has delivery of the same type.';
  notOk = 'Invalid';
  deliveryCreatedSuccesfully = 'Delivery successfully created';
  familyWasNotFound = 'No family found';
  gpsLocationNear = 'GPS spot near';
  familyIdInHagaiApp = 'family id in the holiday app';
  familyName = 'Name';
  socialSecurityNumber = 'ID number';
  spouceSocialSecurityNumber = 'Spouse Identity Number';
  familyMembers = 'Number of persons';
  birthDate = 'Date of birth';
  nextBirthDay = 'Next birthday';
  age = 'age';
  defaultBasketType = 'Default parcel type';
  defaultQuantity = 'Default number of parcels';
  familySource = 'Referrer';
  familyHelpContact = 'Contact details for details (COO)';
  familyHelpPhone1 = 'Clarification phone 1';
  familyHelpPhone2 = 'Clarification phone 2';
  specialAsignment = 'Special affiliation';
  defaultSelfPickup = 'Default self pickup';
  familyUniqueId = 'Family Unique Id';
  internalComment = 'Internal Note - Will not appear for volunteer';
  cityAutomaticallyUpdatedByGoogle = 'City (automatically updated)';
  addressComment = 'Additional directions for address';
  postalCode = 'Postal Code';
  commentForVolunteer = 'Comment for volunteer';
  phone1 = 'Phone 1';
  phone1Description = 'Phone Notes 1';
  phone2 = 'Phone 2';
  phone2Description = 'Phone Notes 2';
  phone3 = 'Phone 3';
  phone3Description = 'Phone Notes 3';
  phone4 = 'Phone 4';
  phone4Description = 'Phone Notes 4';
  commentForReception = 'Absorption notes in the laboratory';
  statusChangeDate = 'Status: Date changed';
  statusChangeUser = "Status: Who's updating";
  defaultVolunteer = 'Default volunteer';
  previousDeliveryStatus = 'Previous delivery status';
  previousDeliveryDate = 'Previous delivery date';
  previousDeliveryNotes = 'Previous delivery note';
  addressByGoogle = 'Address in Google Maps';
  addressOk = 'Correct Address';
  previousDeliverySummary = 'Previous delivery summary';
  createUser = 'Creating user';
  lastUpdateDate = 'Deadline';
  lastUpdateUser = 'Updating user';
  within = 'within';
  forFamily = 'For the family';
  by = 'by';
  theFamily = 'The family';
  wasUpdatedTo = 'Updated to';
  wasAssignedTo = 'assigned with';
  assignmentCanceledFor = 'Assignment cancelled for';
  invalidPhoneNumber = 'Phone number is incorrect';
  valueAlreadyExistsFor = 'Value already exists for the family';
  atAddress = 'at';
  familyGroup = 'Family affiliation groups';
  identicalSocialSecurityNumber = 'Same identity number';
  sameAddress = 'Same address';
  identicalPhone = ' Same phone number';
  similarName = ' A similar name';
  statusSummary = 'Status summary';
  onTheWay = 'Assigned';
  unAsigned = 'Unassigned';
  specialUnasigned = 'UnAssigned Specials';
  delivered = 'Delivered';
  problem = 'problem';
  quantity = 'Quantity';
  volunteer = 'Volunteer';
  commentsWritteByVolunteer = 'Comments entered by the volunteer upon delivery';
  deliveryStatusDate = 'When';
  courierAsignUser = 'Volunteer assigning user';
  courierAsignDate = 'Volunteer assignment date';
  deliveryCreateDate = 'Assignment date';
  deliveryCreateUser = 'End User';
  requireFollowUp = 'Requires Followup';
  requireFollowUpUpdateUser = 'Requires Followup Update User';
  requireFollowUpUpdateDate = 'Requires Followup Update Date';
  deliveryDetailsFor = 'delivery details for';
  remainingByBaskets = 'UnAssigned by parcels';
  byBaskets = 'By parcels';
  deliveredByBaskets = 'Parcels Delivered';
  remainingByCities = 'UnAssigned by Cities';
  remainingByGroups = 'UnAssigned by Groups';
  deliveries = 'Deliveries';
  empty = 'blank';
  allOthers = 'All others';
  total = 'Total';
  deliverySummary = 'delivery Summary';
  families = 'Families';
  exportToExcel = 'Export to Excel';
  newDelivery = 'New Delivery';
  cancelAssignmentFor = 'Cancel volunteer assignment to';
  familyDeliveries = 'Family deliveries';
  freezeDelivery = 'Freeze delivery';
  freezeDeliveryHelp = '"Frozen" delivery is a delivery that will not be assigned with any volunteer until the "delivery" is dispatched. Freezing is used to temporarily stop certain deliveries until they can be thawed and shipped. Do freeze delivery to';
  unFreezeDelivery = 'Unfreeze Delivery';
  deleteDelivery = 'Delete delivery';
  shouldDeleteDeliveryFor = 'Delete Delivery for';
  archiveDelivery = 'Archive';
  shouldArchiveDelivery = 'Archive the delivery?';
  deliveriesUpdated = 'deliveries updated';
  showAll = 'Show all';
  searchFamily = 'Family Search';
  newFamily = 'Add Family';
  googleApiProblem = "What is Google's problem";
  mergeFamilies = 'Merge families';
  familyDetails = 'Family details';
  googleSearchAddress = 'Search Google for an address';
  familiesUpdated = 'Families have been updated';
  byGroups = 'By groups';
  adderssProblems = 'Addresses with issues';
  activeFamilies = 'Active';
  allFamilies = 'All families';
  lastName = 'Last Name';
  firstName = 'First name';
  streetName = 'Street';
  houseNumber = 'House number';
  familyComponentVideos = 'For tutorial videos on a family screen, click here';
  close = 'close';
  questionsAndAnswers = 'Questions and Answers';
  dialTo = 'Dial';
  forHelp = 'For help';
  dialForHelp = 'Call for help';
  cancel = 'Cancel';
  updateDeliveryFailure = 'Update delivery failure';
  all = 'All';
  searchVolunteer = 'Volunteer search';
  sendSmsToAllVolunteersThatDidntGetOne = 'Send an SMS to volunteers who have not yet received';
  completed = 'Completed';
  notDelivered = 'Not delivered';
  left = 'came out';
  smsNotSent = 'SMS has not yet been sent';
  volunteers = 'Volunteers';
  selectDeliveriesOnMap = 'Select families on the map';
  drawingHelpText = 'Please click on the map at several points to highlight the area you want, and double-click to finish';
  selectedDeliveries = 'deliveries marked';
  showVolunteers = 'Show volunteers';
  addressesWithMoreThanOneFamily = 'Addresses with more than one family';
  showFamilies = 'View families';
  recentlyAssigned = 'Assigned now';
  addVolunteer = 'Add a volunteer / manager';
  selectExcelFile = 'Select an Excel file';
  excelImportVideo = 'For a Tutorial on Excel Import, Click here';
  mapExcelColumns = 'Define the columns';
  loadExcelSettings = 'Load settings';
  deleteExcelSettings = 'Delete settings';
  nextStep = 'Proceed to the next step';
  addColumnsThatAreNotInTheFile = 'Add columns not found in imported file';
  excelColumnIgnore = "Don't Import";
  remove = 'Remove';
  addExcelColumn = 'Add a column';
  columnSelectionInFile = 'Columns in file selection';
  excelSheet = 'sheet';
  linesInExcel = 'Lines in the axle';
  excelImportFinalSettings = 'Recent Settings';
  executeExcelImport = 'Importing';
  excelImportResults = 'Results';
  errors = 'Errors';
  excelCompareToThisFamilyAnd = 'Compare with this family and';
  moveToUpdateFamilies = 'Forward to families update';
  excelNoneOfTheseFamiliesMatch = 'None of these families fit in the line at Excel,';
  moveToNewFamilies = 'Move to new families';
  readExcelRow = 'Get the line';
  excelReadLineAnyhow = 'even though';
  previous = 'previous';
  next = 'the next';
  stopAskingForConfirmation = 'Stop asking if you agree to anything';
  familiesForUpdate = 'Families to update';
  removeFromFamiliesToUpdate = 'Remove from families to update';
  newFamilies = 'New families';
  addAllFamilies = 'Add all families';
  existingFamilies = 'Existing families';
  saveExcelImportReport = 'Save Excel Import Report';
  saveExcelSettings = 'Save settings';
  newVolunteers = 'New volunteers';
  addAllVolunteers = 'Add all volunteers';
  updateVolunteers = 'Volunteers to update';
  existingVolunteers = 'Existing volunteers';
  moveToNewVolunteers = 'Forward volunteers to add';
  pleaseWaitVerifyingDetails = 'Please wait - verify details';
  replaceBySiteUrl = 'The URL will be replaced';
  sampleMessage = 'Sample message';
  reminderSmsTextHelp = 'This message will be sent to a volunteer who is delayed from a volunteer tracking screen';
  sampleReminderSms = 'Sample reminder message';
  basketTypes = 'Parcel types';
  distributionLists = 'Distribution lists';
  familySources = 'Family Sources';
  distributionListsHelp = 'These groups will be presented with family affiliation and will allow for quick filtering';
  volunteerTexts = 'Volunteer messages';
  volunteerQAndA = 'Volunteer questions and answers';
  volunteerQAndAHelp = 'When the volunteer presses the "I have a problem" button, a screen appears with this list of FAQs for help';
  question = 'a question';
  answer = 'Answer';
  voluntreeHelpPhones = 'Phones for volunteer help';
  volunteerHelpPhonesHelpLine1 = 'When the volunteer presses the "I have a problem" button, a screen will appear if you can call for help or update without giving a message.';
  volunteerHelpPhonesHelpLine2 = 'Here you can update which phones will show him help, you can update one or more.';
  preferences = 'Preferences';
  logoAndIcons = 'Logos and figurines';
  logoRecommendTool = 'We recommend using the icons';
  logoRecommendAfter = 'And the result it creates using favicon.ico for the icon - and in apple-icon-120x120.png for the logo';
  iconForWebSite = 'Website Icon';
  logoForWebsiteAndPhone = 'Website and phone logos';
  deleteFamilies = 'Delete families';
  deleteFamiliesHelp = 'Clicking this button will delete all families in the "delete" status from the system. Their delivery history will be preserved.';
  deleteFamiliesButton = 'Delete all families in "delete" status';
  mergeForFamily = 'Air conditioning for the family';
  merge = 'Keep conditioning';
  volunteerFeedbackVideo = 'For a tutorial on volunteer feedback click here';
  updatedBy = 'Updated by';
  showAsignDeliveryFor = 'Show deliveries for';
  moreNews = 'More news';
  filter = 'filtering';
  deliveryDetailsAsDisplayedToVolunteer = 'Family details as they appear to the volunteer';
  assign = 'Assign';
  familesOnStreet = 'Families on the street';
  moreFamilies = 'More families';
  recentVolunteers = 'Recent volunteers';
  moreVolunteers = 'More volunteers';
  showAllFamilies = 'View all families';
  whatWentWrong = "What didn't work out?";
  addCurrentLocationToNote = 'Add current location to comment';
  basketNotDelivered = 'The parcel was not delivered';
  confirm = 'Confirm';
  displayFamilyAsVolunteerWillSeeIt = 'View a family as a volunteer will see her';
  infoAboutUpdates = 'Update details';
  sendMessageToVolunteer = 'Send a message to the volunteer';
  deliveryInfo = 'Delivery Details';
  checkAddress = 'Check address';
  showOnGovMap = 'View in govmap';
  showOnGoogleMap = 'View on Google Maps';
  openWaze = 'Open WAZE';
  badAddressTitle = 'Please note, inaccurate address';
  badAddressHelpStart = 'Google Maps did not find an accurate address';
  badAddressHelpLine1 = "Please compare the 'Address' field with the 'Address on  Google Maps' field.";
  badAddressHelpLine2 = 'Note that an inaccurate address may cause the volunteer to navigate to a completely different place.';
  familyAdditionalInfo = 'More details';
  deliveryDefaults = 'Delivery defaults';
  familiesWithSimilarInfo = 'Families with similar details';
  save = 'Save';
  rememberMeOnThisDevice = 'Remember me on this device';
  signIn = 'Sign in';
  pleaseRegister = 'If you are not registered, please register here';
  register = 'Register';
  isAlreadyAsignedTo = 'Already assigned with';
  onStatus = 'Status';
  shouldAssignTo = 'Assign to';
  saveVolunteerInfo = 'Saving volunteer details:';
  adminRequireToSetPassword = 'You are a manager user without a required password defined. Please set a password in the following user details screen.';
  userNotFoundOrWrongPassword = 'User not found or password incorrect';
  fromDate = 'Dated';
  toDate = 'Until';
  shouldSendSmsTo = 'Send a text message to';
  smsNotOpened = 'SMS not opened';
  doneVolunteers = 'Finish';
  problems = 'Problems';
  delveriesInProgress = 'Families are waiting';
  dates = 'Dates';
  selfPickup = 'Come and take';
  delveriesSuccesfull = 'Delivered';
  familiesAt = 'Families b';
  noFamiliesSelected = 'No families were selected';
  cantMergeOneFamily = 'Cannot merge only one family';
  tooManyFamiliesForMerge = 'Too many families at once';
  basketTypeName = 'Name';
  readyForDelivery = 'Ready for delivery';
  frozen = 'frozen';
  deliveredSuccessfully = 'Successfully delivered';
  leftByHouse = 'Was left by the house';
  notDeliveredBadAddress = 'Not delivered, address issue';
  notDeliveredNotHome = 'Not delivered, were not at home';
  notDeliveredOther = 'Not delivered, other';
  deliveryStatus = 'delivery status';
  useFamilyDefaultBasketType = 'Default Parcel Type';
  mustSelectDistributionList = 'Must select a distribution list';
  assignAFamilyGroup = 'Assignment to a family group';
  action = 'action';
  freezeDeliveries = 'Freeze deliveries';
  freezeDeliveriesHelp = '"Frozen" delivery is a delivery that will not be assigned with any volunteer until the "delivery" is dispatched. Freezing is used to temporarily stop certain deliveries until they can be thawed and shipped. The freeze will only be carried out for deliveries that are ready for delivery.';
  unfreezeDeliveries = 'Cancellation of delivery free';
  unfreezeDeliveriesHelp = 'Canceling the freeze will return frozen deliveries ready for delivery';
  archiveFinishedDeliveries = 'Archive completed deliveries';
  deletePendingDeliveries = 'Delete undelivered deliveries to these families';
  deleteExistingComment = 'Delete existing comment';
  updateStatusHelp = 'Status has been removed from the lists - designed to signal that the family should not receive food - but unlike the deletion status - we want to keep it in the database so that if welfare brings it to us again, we will know that they have been removed from the lists. It is suitable for families who have been resolved or who simply do not want to receive - or the address does not exist etc ...';
  updateFamilyStatus = 'Update family status';
  updateDefaultBasket = 'Update default parcel type';
  updateExistingDeliveries = 'Change also for ongoing deliveries';
  updateDefaultSelfPickup = 'Update are coming by default';
  updateArea = 'Update area for families';
  updateDefaultQuantity = 'Update default quantity';
  updateFamilySource = 'Update Referrer';
  selfPickupStrategy_familyDefault = 'Come take according to the default family setting';
  selfPickupStrategy_yes = 'Self Pickup';
  selfpickupStrategy_no = 'Home delivery';
  selfpickupStrategy_byCurrentDelivery = 'Self Pickup according to the current delivery';
  selfPickupStrategy = 'Set up come take';
  notAthorized = 'No legacy!';
  actionNotFound = 'Action not found on server';
  active = 'Active';
  removedFromList = 'Removed from list';
  toDelete = 'To delete';
  familyStatus = 'status';
  deleteDeliveries = 'Delete deliveries';
  deleteDeliveriesHelp = 'Deleting undelivered deliveries only. Please note that recipient families are not removed from distribution lists. To remove a family from the lists you should update the family status.';
  updateDefaultVolunteer = 'Update a default family volunteer';
  clearVolunteer = 'Cancel volunteer assignment';
  setAsDefaultVolunteer = 'Also update as a default volunteer';
  updateVolunteerHelp = 'To update a volunteer on the way to "ready to ship", select "Unsubscribe from a volunteer". In any case, a volunteer update will only be made to unpublished deliveries';
  updateVolunteer = 'Update volunteer shipper';
  updateDeliveriesStatus = 'Update delivery status';
  updateDeliveriesStatusHelp = 'The status of "frozen" is a delivery that will not be assigned with any volunteer until the delivery is "enabled". Freezing is used to temporarily stop certain deliveries until they can be thawed and shipped. The freeze will only be carried out for deliveries that are ready for delivery.';
  statusNotSelected = 'No status selected';
  updateCanceled = 'Update stopped';
  archiveDeliveries = 'Archive deliveries';
  archiveDeliveriesHelp = "Only deliveries marked as 'delivered' or 'failed' are archived . The archive can be viewed at any time under delivery History.";
  revertArchive = 'Return from archive';
  updateBasketType = 'Update parcel type';
  updateBasketQuantity = 'Update Quantity';
  updateDistributionList = 'Update distribution list';
  useBusketTypeFromCurrentDelivery = 'Parcel type by current delivery';
  newDeliveryForAll = 'New delivery for all deliveries and not just for those that ended successfully';
  distributionListAsCurrentDelivery = 'Distribution list as in current delivery';
  pleaseSelectDistributionList = 'Must select a distribution list';
  newDeliveryForDeliveriesHelp = 'A new delivery will be set for all statuses that have been successfully delivered, or any problem, unless you choose to select the field';
  volunteerByFamilyDefault = 'Set up a volunteer by default family-defined volunteer';
  volunteerByCrrentDelivery = 'Volunteer by current delivery';
  noVolunteer = 'No volunteer';
  selectVolunteer = 'Choose a volunteer';
  frozens = 'Frozen';
  addressNotOkOpenWaze = 'The address is inaccurate. Please check Google Maps or call family and kindly update the correct address in the comments section. Would you like to open Maps?';
  wasCopiedSuccefully = ' Successfully copied';
  areYouSureYouWantToCancelAssignmentTo = 'Are you sure you want to cancel assignment to';
  cancelAssignmentForHelperFamilies = 'Cancel all deliveries assigned to volunteer';
  areYouSureYouWantToMarkDeliveredSuccesfullyToAllHelperFamilies = 'Are you sure you want to mark successfully delivered to';
  markDeliveredToAllHelprFamilies = 'Unassign all deliveries';
  smsMessageSentTo = 'SMS message sent to';
  messageCopied = 'Message copied';
  linkCopied = 'Link copied';
  clearAllVolunteerComments = 'Clear all volunteer comments';
  clearAllVolunteerCommentsAreYouSure = 'Are you sure you want to clear all volunteer comments?';
  clearEscortInfo = 'Clear escort details for all volunteers';
  clearEscortInfoAreYouSure = 'Are you sure you want to clear escort details for all volunteers?';
  resetPassword = 'Reset password';
  resetPasswordAreYouSureFor = 'Are you sure you want to delete password';
  passwordWasReset = 'Password deleted';
  sendInviteBySms = 'Send invitation by SMS to manager';
  unfitForInvite = 'Not suitable for order';
  welcomeTo = 'Welcome to the environment of';
  pleaseEnterUsing = 'Please log in with the link:';
  enterFirstTime = 'Because you do not have a password set yet - please enter for the first time, by typing in your phone number without a password and clicking the "Login" button. The system will ask you to set a password and that will be your password.\n  Successfully';
  inviteSentSuccesfully = 'Invitation sent successfully';
  shouldAdd = 'Do add';
  minutesRemaining = 'Minutes remained';
  familiesAddedSuccesfull = 'Successfully added the rows';
  gotoDeliveriesScreen = 'Switch to a delivery screen or stay on this one?';
  shouldUpdateColumn = 'Do update the field';
  forFamilies = 'For families';
  for = 'To';
  updateOfAddressMayTakeLonger = 'Note - Updating an address field can take longer than other fields';
  selectExcelSheet = 'Select an excel sheet';
  excelSheel = 'sheet';
  excelSheetIsEmpty = 'blank';
  firstNameShort = 'Private';
  city = 'City';
  defaultDeliveryComment = 'Default Comment for Volunteer';
  defineDeliveriesForFamiliesInExcel = 'Define deliveries for all families imported from Excel file';
  ifBasketTypeInExcelIsDifferentFromExistingOneCreateNewDelivery = 'If there is a delivery for a family with a different parcel type, add a new one';
  useFamilyMembersAsQuantity = 'Determine Quantity by Family Members';
  linesProcessed = 'Rows were processed';
  alreadyExistsInLine = 'Already exists in line';
  unnamed = 'unnamed';
  sameLineExcelMatchesSeveralRowsInTheDatabase = 'The same family on the site fits several lines in Excel:';
  manyAddressesEndWithNumber = 'From the addresses are empty or ending in the book - you may not have noticed the settlement of the address. Go back to column definition?';
  moreThanOneRowInDbMatchesExcel = 'More than one family was found on the site corresponding to this line from Excel. Please select which of the following families fits the row from the excel and pass it on';
  familyAlreadyRemovedFromList = 'Updated family in database as removed from lists';
  moveTheFamily = 'To move the family';
  addedToDb = 'Added to data store';
  toNewFamilies = 'For new families';
  importFamily = 'Import';
  shouldCompare = 'Do compare the';
  compareTo = 'compared to';
  andMoveToUpdateFamilies = 'and move to update families';
  notImported = 'Not Added';
  existsWithAnUpdate = 'Existing with update';
  existsIdenticat = 'There is the same';
  error = 'Error';
  languageCode = 'en';
  resetTextsToLanguageDefaults = 'Return texts to default settings';
  no = 'No';
  yes = 'Yes';
  search = 'Search';
  assigned = 'Assigned';
  familySourceName = 'Name';
  contactPersonName = 'contact';
  lineWithNoName = 'Untitled line';
  smsLoginFailed = "Something didn't work out with the link, you are taken to a login screen - please enter with your phone number";
  aMinuteAgo = 'A minute ago';
  before = 'before';
  anHour = 'hour';
  twoHours = 'Two hours';
  hours = 'Hours';
  andAQuater = 'And a quarter';
  andThreeQuaters = 'And three-quarters';
  andAHalf = 'And a half';
  on = 'B';
  days = 'Days';
  yesterday = 'Yesterday';
  twoDaysAgo = 'the day before yesterday';
  thankYou = 'Thanks';
  searchCompanyName = 'Search for a company name';
  confirmDeleteOf = 'Deletion certificate for';
  originalAddress = 'Original address';
  addGroupAssignmentVerb = 'Add affiliation to the group';
  removeGroupAssignmentVerb = 'Remove Group';
  replaceGroupAssignmentVerb = 'Replace affiliation with the group';
  volunteerCanUpdateComment = 'A volunteer can make a note for himself';
  volunteerCanUpdatePreferredDistributionAddress = 'A volunteer can update a preferred division area';
  email = 'eMail';
  preferredDistributionArea = 'Preferred distribution area address';
  preferredDistributionArea2 = 'Preferred Distribution Area Address 2';
  doesNotExist = 'Does not exist';
  questionAddToApplication = 'Do add';
  customSmsMessage = 'Personalized SMS';
  assignedToVolunteer = 'Associated with a volunteer';
  languageCodeHe = 'en';
  removeFollowUpFor = 'Remove "Requires Followup" for ';
  allFamilySources = 'All Family Sources';
  allNew = 'All the news';
  problemsThatRequireFollowup = 'Problems Followup';
  commentsWrittenByVolunteers = 'Comments written by volunteers';
  distributionList = 'Distribution list';
  list = 'List';
  map = 'Map';
  noDeliveries = 'No deliveries for distribution';
  showDistCenterAsEndAddressForVolunteer = 'View distribution list addresses as a volunteer endpoint';
  endOnFar = 'End at the farthest Address';
  startAtDistributionCenterAndEndOnRemoteFamily = 'End at the most isolated address';
  circularRoute = 'Start and Finish at the Distribution Center';
  endsOnDistributionCenter = 'End at the distribution center';
  parcelSummary = 'Show Parcel Summary';
  useCurrentLocationForStart = 'Calculate route based on current location';
  eventName = 'Event name';
  eventDescription = 'description';
  eventDate = 'date';
  eventTime = 'hour';
  eventEndTime = 'To an hour';
  eventPreparation = 'Draft';
  activeEventStatus = 'Open to registration';
  archiveEventStatus = 'archives';
  requiredVolunteers = 'A number of volunteers is required';
  attendingVolunteers = 'Number of volunteers signed up';
  eventStatus = 'status';
  eventsComponent = 'Events';
  pleaseRegisterToTheFollowingEvents = 'Please sign up for upcoming events';
  illBeThere = 'Sign me up for this event';
  registeredToEvent = 'You are registered for this event';
  iCantMakeIt = "I can't go to the event";
  distributionCenterComment = 'Note';
  distributionCenterName = 'Name';
  distributionCenterUniqueId = 'symbol';
  distributionCenterDetails = 'Details';
  thisFamilyHas = 'This family has';
  deliveries_ShouldWeDeleteThem = 'Active Deliveries, do you want to Delete them?';
  excludeGroups = 'Excluded Groups';
  useFamilyQuantity = 'Default Quantity';
  clear = 'Clear';
  byLocation = 'By distance';
  from = 'from';
  delivery = 'Delivery';
  updateFamilyDefaults = 'Update family defaults';
  updateFamilyDefaultsHelp = 'Update family defaults based on current delivery. Please select which columns to update';
  updateBasedOnTheChangesIn = ', update them based on changes in';
  familyHasExistingDeliveriesDoYouWantToViewThem = 'This family has active deliveries, display them?';
  and = 'and';
  markAsDeliveredFor = 'Mark Successful Delivery for';
  onTheWayDeliveries = 'On-the-go deliveries';
  markAsSelfPickupFor = 'Mark ';
  selfPickupDeliveries = 'Self Pickup Deliveries';
  deliveriesWithResultStatusSettingsTheirStatusWillOverrideThatStatusAndItWillNotBeSavedInHistory_toCreateANewDeliveryAbortThisActionAndChooseTheNewDeliveryOption_Abort = 'Completed deliveries. Updating their status will erase the existing value and the deliveries will not be saved in history. If you want to create a new delivery, abort this update and select the New Delivery option from the menu. Abort this update?';
  excelImportUpdateFamilyDefaultsBasedOnCurrentDelivery = 'Update family defaults according to this delivery';
  assignedButNotOutBaskets = 'Assigned but not out by Parcels';
  selfPickupByBaskets = 'Self Pickup by Parcels';
  routeOptimization = 'Route planning';
  assignVolunteer = 'Assign Volunteer';
  group = 'Group';
  showOnlyCompletedDeliveries = 'Show only completed deliveries';
  showOnlyArchivedDeliveries = 'Show only archives';
  smsSent = 'SMS sent';
  noAssignedVolunteer = 'No assigned volunteer';
  smsOpened = 'SMS viewed';
  messageStatus = 'Message status';
  internalDeliveryComment = 'Internal deliver note - not visible to volunteer';
  numOfActiveReadyDeliveries = 'Num of Active non completed deliveries';
  volunteerAssignments = 'Volunteer Assignments';
  ifYouNeedAnyHelpPleaseCall = 'For help call';
  customColumn = 'Another field for the family';
  caption = 'description';
  receptionDone = 'Absorbed in the laboratory';
  optionalValues = 'Possible comma-separated values';
  hideFamilyPhoneFromVolunteer = 'Do not show the family phone to a volunteer';
  hadProblemBefore = 'had problem';
  showOnlyLastNamePartToVolunteer = 'Show just one last word to the volunteer on behalf of the family';
  allowSendSuccessMessageOption = 'Allow Send SMS to family option';
  sendSuccessMessageToFamily = 'Send SMS to Family on delivery';
  successMessageText = 'Delivery SMS Message to Family';
  requireEULA = 'require EULA';
  requireConfidentialityApprove = 'Require Confidentiality Approval';
  requireComplexPassword = 'Require complex password';
  timeToDisconnect = 'Disconnect timeout in minutes';
  daysToForcePasswordChange = 'Days to force password change';
  passwordTooShort = 'Password too short';
  passwordCharsRequirement = 'At least one digit and one letter are required';
  passwordExpired = 'Password expired, please set a new password';
  infoIsConfidential = 'Present both the volunteer and the manager with a message about the confidentiality of the information\n  "The information extracted from the system contains information protected under the Privacy Protection Act.\n  The information must be kept in a protected place so that unauthorized access to the information will not be allowed.\n  No part of this site may be copied, retransmitted, reposted, duplicated or otherwise used. Whoever submits the information illegally commits an offense. "\n  ';
  IConfirmEula = 'I agree to the Terms of Use';
  mustConfirmEula = 'The application cannot be used without consent to the terms of use';
  readEula = 'Click to read the terms of use of the site';
  newPasswordMustBeNew = 'The new and existing password is an identity';
  invalidatePassword = 'Disable password';
  passwordInvalidated = 'The password has been revoked';
  sessionExpiredPleaseRelogin = 'The connection to the server has expired, please log in again';
}