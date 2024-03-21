const keyPrefixObjectArray = [
    {
      "Key Prefix": "000",
      "Object Type": "EmptyKey"
    },
    {
      "Key Prefix": "001",
      "Object Type": "Account"
    },
    {
      "Key Prefix": "002",
      "Object Type": "Note"
    },
    {
      "Key Prefix": "003",
      "Object Type": "Contact"
    },
    {
      "Key Prefix": "005",
      "Object Type": "User"
    },
    {
      "Key Prefix": "006",
      "Object Type": "Opportunity"
    },
    {
      "Key Prefix": "007",
      "Object Type": "Activity"
    },
    {
      "Key Prefix": "008",
      "Object Type": "OpportunityHistory"
    },
    {
      "Key Prefix": "00A",
      "Object Type": "FORECAST_ITEM"
    },
    {
      "Key Prefix": "00B",
      "Object Type": "ListView"
    },
    {
      "Key Prefix": "00C",
      "Object Type": "DeleteEvent"
    },
    {
      "Key Prefix": "00D",
      "Object Type": "Organization"
    },
    {
      "Key Prefix": "00E",
      "Object Type": "UserRole"
    },
    {
      "Key Prefix": "00F",
      "Object Type": "QUEUE"
    },
    {
      "Key Prefix": "00G",
      "Object Type": "Group"
    },
    {
      "Key Prefix": "00I",
      "Object Type": "Partner"
    },
    {
      "Key Prefix": "00I",
      "Object Type": "AccountPartner"
    },
    {
      "Key Prefix": "00I",
      "Object Type": "OpportunityPartner"
    },
    {
      "Key Prefix": "00J",
      "Object Type": "OpportunityCompetitor"
    },
    {
      "Key Prefix": "00K",
      "Object Type": "OpportunityContactRole"
    },
    {
      "Key Prefix": "00M",
      "Object Type": "MobileSettingsAssignment"
    },
    {
      "Key Prefix": "00N",
      "Object Type": "CustomFieldDefinition"
    },
    {
      "Key Prefix": "00O",
      "Object Type": "Report"
    },
    {
      "Key Prefix": "00P",
      "Object Type": "Attachment"
    },
    {
      "Key Prefix": "00Q",
      "Object Type": "Lead"
    },
    {
      "Key Prefix": "00R",
      "Object Type": "MassOperationsSubsetResults"
    },
    {
      "Key Prefix": "00S",
      "Object Type": "ImportQueue"
    },
    {
      "Key Prefix": "00T",
      "Object Type": "Task"
    },
    {
      "Key Prefix": "00U",
      "Object Type": "Event"
    },
    {
      "Key Prefix": "00X",
      "Object Type": "EmailTemplate"
    },
    {
      "Key Prefix": "00Y",
      "Object Type": "EmailTemp"
    },
    {
      "Key Prefix": "00a",
      "Object Type": "COMMENTS"
    },
    {
      "Key Prefix": "00a",
      "Object Type": "CaseComment"
    },
    {
      "Key Prefix": "00a",
      "Object Type": "IdeaComment"
    },
    {
      "Key Prefix": "00b",
      "Object Type": "WebLink"
    },
    {
      "Key Prefix": "00c",
      "Object Type": "Training"
    },
    {
      "Key Prefix": "00d",
      "Object Type": "AutomatedProcessUserId"
    },
    {
      "Key Prefix": "00e",
      "Object Type": "Profile"
    },
    {
      "Key Prefix": "00f",
      "Object Type": "MH_BLUESHEET"
    },
    {
      "Key Prefix": "00g",
      "Object Type": "MH_GOLDSHEET"
    },
    {
      "Key Prefix": "00h",
      "Object Type": "Layout"
    },
    {
      "Key Prefix": "00i",
      "Object Type": "Pricebook"
    },
    {
      "Key Prefix": "00j",
      "Object Type": "Product"
    },
    {
      "Key Prefix": "00k",
      "Object Type": "OpportunityLineItem"
    },
    {
      "Key Prefix": "00l",
      "Object Type": "Folder"
    },
    {
      "Key Prefix": "00m",
      "Object Type": "EMAIL_ATTACHMENT_LOOKUP"
    },
    {
      "Key Prefix": "00n",
      "Object Type": "EMAIL_ATTACHMENT_ARCHIVE"
    },
    {
      "Key Prefix": "00o",
      "Object Type": "OpportunityLineItemSchedule"
    },
    {
      "Key Prefix": "00p",
      "Object Type": "UserTeamMember"
    },
    {
      "Key Prefix": "00q",
      "Object Type": "OpportunityTeamMember"
    },
    {
      "Key Prefix": "00r",
      "Object Type": "AccountShare"
    },
    {
      "Key Prefix": "00s",
      "Object Type": "AccountOwnerSharingRule"
    },
    {
      "Key Prefix": "00t",
      "Object Type": "OpportunityShare"
    },
    {
      "Key Prefix": "00u",
      "Object Type": "OpportunityOwnerSharingRule"
    },
    {
      "Key Prefix": "00v",
      "Object Type": "CampaignMember"
    },
    {
      "Key Prefix": "00w",
      "Object Type": "MassOperationsNotification"
    },
    {
      "Key Prefix": "00x",
      "Object Type": "BILLED_PRODUCT"
    },
    {
      "Key Prefix": "00y",
      "Object Type": "PURCHASE_RULE"
    },
    {
      "Key Prefix": "00z",
      "Object Type": "PURCHASE_RULE_ENTRY"
    },
    {
      "Key Prefix": "10",
      "Object Type": "CaseSolution"
    },
    {
      "Key Prefix": "11",
      "Object Type": "GroupMember"
    },
    {
      "Key Prefix": "12",
      "Object Type": "RecordType"
    },
    {
      "Key Prefix": "13",
      "Object Type": "RecordTypePicklist"
    },
    {
      "Key Prefix": "14",
      "Object Type": "ProfileRecordType"
    },
    {
      "Key Prefix": "15",
      "Object Type": "Document"
    },
    {
      "Key Prefix": "16",
      "Object Type": "BrandTemplate"
    },
    {
      "Key Prefix": "17",
      "Object Type": "EntityHistory"
    },
    {
      "Key Prefix": "18",
      "Object Type": "EmailStatus"
    },
    {
      "Key Prefix": "19",
      "Object Type": "BusinessProcess"
    },
    {
      "Key Prefix": "01A",
      "Object Type": "BusinessProcessPicklist"
    },
    {
      "Key Prefix": "01B",
      "Object Type": "LayoutSection"
    },
    {
      "Key Prefix": "01C",
      "Object Type": "LayoutItem"
    },
    {
      "Key Prefix": "01D",
      "Object Type": "UserAccountTeamMember"
    },
    {
      "Key Prefix": "01E",
      "Object Type": "EntityAttributes"
    },
    {
      "Key Prefix": "01G",
      "Object Type": "ProfileLayout"
    },
    {
      "Key Prefix": "01H",
      "Object Type": "MailmergeTemplate"
    },
    {
      "Key Prefix": "01I",
      "Object Type": "CustomEntityDefinition"
    },
    {
      "Key Prefix": "01J",
      "Object Type": "PicklistMaster"
    },
    {
      "Key Prefix": "01J",
      "Object Type": "LeadStatus"
    },
    {
      "Key Prefix": "01J",
      "Object Type": "OpportunityStage"
    },
    {
      "Key Prefix": "01K",
      "Object Type": "ActivityMetricRollupBase"
    },
    {
      "Key Prefix": "01L",
      "Object Type": "CurrencyType"
    },
    {
      "Key Prefix": "01M",
      "Object Type": "AccountTeamMember"
    },
    {
      "Key Prefix": "01N",
      "Object Type": "Scontrol"
    },
    {
      "Key Prefix": "01O",
      "Object Type": "USER_UI_CONFIGURATION"
    },
    {
      "Key Prefix": "01P",
      "Object Type": "PermissionSetTabSetting"
    },
    {
      "Key Prefix": "01Q",
      "Object Type": "WorkflowRule"
    },
    {
      "Key Prefix": "01Q",
      "Object Type": "AssignmentRule"
    },
    {
      "Key Prefix": "01R",
      "Object Type": "RuleFilter"
    },
    {
      "Key Prefix": "01S",
      "Object Type": "RuleFilterItem"
    },
    {
      "Key Prefix": "01T",
      "Object Type": "RuleFilterAction"
    },
    {
      "Key Prefix": "01U",
      "Object Type": "ActionAssignEscalate"
    },
    {
      "Key Prefix": "01V",
      "Object Type": "ActionTask"
    },
    {
      "Key Prefix": "01W",
      "Object Type": "ActionEmail"
    },
    {
      "Key Prefix": "01X",
      "Object Type": "ActionEmailRecipient"
    },
    {
      "Key Prefix": "01Y",
      "Object Type": "CampaignMemberStatus"
    },
    {
      "Key Prefix": "01Z",
      "Object Type": "Dashboard"
    },
    {
      "Key Prefix": "01a",
      "Object Type": "DashboardComponent"
    },
    {
      "Key Prefix": "01b",
      "Object Type": "ListViewCriterion"
    },
    {
      "Key Prefix": "01c",
      "Object Type": "ListViewDisplayColumn"
    },
    {
      "Key Prefix": "01d",
      "Object Type": "FOLDER_GROUPS"
    },
    {
      "Key Prefix": "01e",
      "Object Type": "PicklistSet"
    },
    {
      "Key Prefix": "01f",
      "Object Type": "Scorecard"
    },
    {
      "Key Prefix": "01g",
      "Object Type": "API_QUERY"
    },
    {
      "Key Prefix": "01h",
      "Object Type": "Translation"
    },
    {
      "Key Prefix": "01i",
      "Object Type": "TRANSLATION_USER"
    },
    {
      "Key Prefix": "01j",
      "Object Type": "LocalizedValue"
    },
    {
      "Key Prefix": "01k",
      "Object Type": "FieldPermissions"
    },
    {
      "Key Prefix": "01l",
      "Object Type": "ActionResponse"
    },
    {
      "Key Prefix": "01m",
      "Object Type": "BusinessHours"
    },
    {
      "Key Prefix": "01n",
      "Object Type": "CaseShare"
    },
    {
      "Key Prefix": "01o",
      "Object Type": "LeadShare"
    },
    {
      "Key Prefix": "01p",
      "Object Type": "ApexClass"
    },
    {
      "Key Prefix": "01q",
      "Object Type": "ApexTrigger"
    },
    {
      "Key Prefix": "01r",
      "Object Type": "CustomTabDefinition"
    },
    {
      "Key Prefix": "01s",
      "Object Type": "Pricebook2"
    },
    {
      "Key Prefix": "01t",
      "Object Type": "Product2"
    },
    {
      "Key Prefix": "01u",
      "Object Type": "PricebookEntry"
    },
    {
      "Key Prefix": "01v",
      "Object Type": "PricebookShare"
    },
    {
      "Key Prefix": "01w",
      "Object Type": "OpportunityUpdateReminder"
    },
    {
      "Key Prefix": "01x",
      "Object Type": "OPP_UPDATE_REMINDER_STATS"
    },
    {
      "Key Prefix": "01y",
      "Object Type": "CaseOwnerSharingRule"
    },
    {
      "Key Prefix": "01z",
      "Object Type": "CaseEscalation"
    },
    {
      "Key Prefix": "20",
      "Object Type": "ExternalIdMap"
    },
    {
      "Key Prefix": "21",
      "Object Type": "QUANTITY_FORECAST"
    },
    {
      "Key Prefix": "22",
      "Object Type": "FiscalYearSettings"
    },
    {
      "Key Prefix": "23",
      "Object Type": "Calendar"
    },
    {
      "Key Prefix": "24",
      "Object Type": "CalendarShare"
    },
    {
      "Key Prefix": "25",
      "Object Type": "ListLayoutItem"
    },
    {
      "Key Prefix": "26",
      "Object Type": "Period"
    },
    {
      "Key Prefix": "27",
      "Object Type": "REVENUE_FORECAST"
    },
    {
      "Key Prefix": "28",
      "Object Type": "OPPORTUNITY_OVERRIDE"
    },
    {
      "Key Prefix": "29",
      "Object Type": "LINEITEM_OVERRIDE"
    },
    {
      "Key Prefix": "02A",
      "Object Type": "LeadOwnerSharingRule"
    },
    {
      "Key Prefix": "02B",
      "Object Type": "LabelDefinition"
    },
    {
      "Key Prefix": "02C",
      "Object Type": "LabelData"
    },
    {
      "Key Prefix": "02D",
      "Object Type": "CaseHistory2"
    },
    {
      "Key Prefix": "02E",
      "Object Type": "HELP_SETTING"
    },
    {
      "Key Prefix": "02F",
      "Object Type": "CustomFieldMap"
    },
    {
      "Key Prefix": "02G",
      "Object Type": "TenantSecret"
    },
    {
      "Key Prefix": "02H",
      "Object Type": "EltWorkflowJobDetail"
    },
    {
      "Key Prefix": "02I",
      "Object Type": "InsightsApplication"
    },
    {
      "Key Prefix": "02J",
      "Object Type": "RecommendationAudience"
    },
    {
      "Key Prefix": "02K",
      "Object Type": "Dataflow"
    },
    {
      "Key Prefix": "02L",
      "Object Type": "DataflowVersion"
    },
    {
      "Key Prefix": "02M",
      "Object Type": "DatasetAccess"
    },
    {
      "Key Prefix": "02N",
      "Object Type": "ContentLogMetricsByOrg"
    },
    {
      "Key Prefix": "02O",
      "Object Type": "DatasetRegister"
    },
    {
      "Key Prefix": "02P",
      "Object Type": "DataflowGroupMember"
    },
    {
      "Key Prefix": "02Q",
      "Object Type": "DataflowGroupDependency"
    },
    {
      "Key Prefix": "02R",
      "Object Type": "USER_PREFERENCE2"
    },
    {
      "Key Prefix": "02S",
      "Object Type": "HTML_COMPONENT"
    },
    {
      "Key Prefix": "02T",
      "Object Type": "CustomPage"
    },
    {
      "Key Prefix": "02U",
      "Object Type": "CustomPageItem"
    },
    {
      "Key Prefix": "02V",
      "Object Type": "PageComponent"
    },
    {
      "Key Prefix": "02W",
      "Object Type": "DataflowGroupTrigger"
    },
    {
      "Key Prefix": "02X",
      "Object Type": "CustomPageProfile"
    },
    {
      "Key Prefix": "02Y",
      "Object Type": "UserComponentData"
    },
    {
      "Key Prefix": "02Z",
      "Object Type": "AccountContactRole"
    },
    {
      "Key Prefix": "02a",
      "Object Type": "ContractContactRole"
    },
    {
      "Key Prefix": "02b",
      "Object Type": "ComponentResourceLink"
    },
    {
      "Key Prefix": "02c",
      "Object Type": "SharingRule"
    },
    {
      "Key Prefix": "02c",
      "Object Type": "VoiceCallRecordingShare"
    },
    {
      "Key Prefix": "02c",
      "Object Type": "VoiceCallShare"
    },
    {
      "Key Prefix": "02d",
      "Object Type": "DIVISION"
    },
    {
      "Key Prefix": "02e",
      "Object Type": "DIVISION_WORKFLOW_RULE"
    },
    {
      "Key Prefix": "02f",
      "Object Type": "DelegateGroup"
    },
    {
      "Key Prefix": "02g",
      "Object Type": "DelegateGroupMember"
    },
    {
      "Key Prefix": "02h",
      "Object Type": "DelegateGroupGrant"
    },
    {
      "Key Prefix": "02i",
      "Object Type": "Asset"
    },
    {
      "Key Prefix": "02j",
      "Object Type": "PROFILE_ENTITY_PERMISSIONS"
    },
    {
      "Key Prefix": "02k",
      "Object Type": "ListLayout"
    },
    {
      "Key Prefix": "02l",
      "Object Type": "OUTBOUND_QUEUE"
    },
    {
      "Key Prefix": "02m",
      "Object Type": "CustomIndex"
    },
    {
      "Key Prefix": "02n",
      "Object Type": "CategoryNode"
    },
    {
      "Key Prefix": "02o",
      "Object Type": "CategoryData"
    },
    {
      "Key Prefix": "02p",
      "Object Type": "DivTransferEvent"
    },
    {
      "Key Prefix": "02q",
      "Object Type": "LayoutItemColumn"
    },
    {
      "Key Prefix": "02r",
      "Object Type": "OpportunityAlert"
    },
    {
      "Key Prefix": "02s",
      "Object Type": "EmailMessage"
    },
    {
      "Key Prefix": "02t",
      "Object Type": "EmailRoutingAddress"
    },
    {
      "Key Prefix": "02u",
      "Object Type": "TabSet"
    },
    {
      "Key Prefix": "02v",
      "Object Type": "TabSetMember"
    },
    {
      "Key Prefix": "02w",
      "Object Type": "LoginIpRange"
    },
    {
      "Key Prefix": "02x",
      "Object Type": "LoginHours"
    },
    {
      "Key Prefix": "02y",
      "Object Type": "ReportAggregate"
    },
    {
      "Key Prefix": "02z",
      "Object Type": "ReportColorRange"
    },
    {
      "Key Prefix": "30",
      "Object Type": "DataflowRequest"
    },
    {
      "Key Prefix": "31",
      "Object Type": "USER_TAB_SET_MEMBER"
    },
    {
      "Key Prefix": "32",
      "Object Type": "ACC_TERRITORY_RULE"
    },
    {
      "Key Prefix": "33",
      "Object Type": "AllPackage"
    },
    {
      "Key Prefix": "33",
      "Object Type": "MetadataPackage"
    },
    {
      "Key Prefix": "34",
      "Object Type": "PackageMember"
    },
    {
      "Key Prefix": "35",
      "Object Type": "SelfServiceUser"
    },
    {
      "Key Prefix": "36",
      "Object Type": "DataAssessmentConfigItem"
    },
    {
      "Key Prefix": "37",
      "Object Type": "ReportColumn"
    },
    {
      "Key Prefix": "38",
      "Object Type": "ReportFilterItem"
    },
    {
      "Key Prefix": "39",
      "Object Type": "ReportBreak"
    },
    {
      "Key Prefix": "03A",
      "Object Type": "CalendarView"
    },
    {
      "Key Prefix": "03B",
      "Object Type": "CalendarModel"
    },
    {
      "Key Prefix": "03C",
      "Object Type": "DataflowInstance"
    },
    {
      "Key Prefix": "03D",
      "Object Type": "ContactOwnerSharingRule"
    },
    {
      "Key Prefix": "03E",
      "Object Type": "GatherStatsTaskInfo"
    },
    {
      "Key Prefix": "03G",
      "Object Type": "AccountCriteriaSharingRule"
    },
    {
      "Key Prefix": "03H",
      "Object Type": "ContactCriteriaSharingRule"
    },
    {
      "Key Prefix": "03I",
      "Object Type": "CaseCriteriaSharingRule"
    },
    {
      "Key Prefix": "03J",
      "Object Type": "ChatterMessage"
    },
    {
      "Key Prefix": "03K",
      "Object Type": "ChatterMessageThread"
    },
    {
      "Key Prefix": "03L",
      "Object Type": "DataflowNode"
    },
    {
      "Key Prefix": "03M",
      "Object Type": "ChatterConversation"
    },
    {
      "Key Prefix": "03N",
      "Object Type": "ChatterConversationMember"
    },
    {
      "Key Prefix": "03O",
      "Object Type": "CardPaymentMethod"
    },
    {
      "Key Prefix": "03P",
      "Object Type": "DataAssessmentMetric"
    },
    {
      "Key Prefix": "03Q",
      "Object Type": "DataAssessmentFieldMetric"
    },
    {
      "Key Prefix": "03R",
      "Object Type": "DataAssessmentValueMetric"
    },
    {
      "Key Prefix": "03S",
      "Object Type": "ContentAsset"
    },
    {
      "Key Prefix": "03U",
      "Object Type": "DataAssessmentBIMetrics"
    },
    {
      "Key Prefix": "03V",
      "Object Type": "CampaignInfluenceModel"
    },
    {
      "Key Prefix": "03Y",
      "Object Type": "InteractionScreenRule"
    },
    {
      "Key Prefix": "03Z",
      "Object Type": "InteractionScreenRuleAction"
    },
    {
      "Key Prefix": "03a",
      "Object Type": "DependentPicklist"
    },
    {
      "Key Prefix": "03b",
      "Object Type": "SubscriberPackageVersionInstallRequest"
    },
    {
      "Key Prefix": "03c",
      "Object Type": "LayoutRightPanel"
    },
    {
      "Key Prefix": "03d",
      "Object Type": "ValidationFormula"
    },
    {
      "Key Prefix": "03e",
      "Object Type": "CustomSetupDefinition"
    },
    {
      "Key Prefix": "03f",
      "Object Type": "CustomSetup"
    },
    {
      "Key Prefix": "03g",
      "Object Type": "QueueSobject"
    },
    {
      "Key Prefix": "03h",
      "Object Type": "ExternalServiceAction"
    },
    {
      "Key Prefix": "03i",
      "Object Type": "ConsoleConfig"
    },
    {
      "Key Prefix": "03j",
      "Object Type": "CaseContactRole"
    },
    {
      "Key Prefix": "03k",
      "Object Type": "ConsoleConfigItem"
    },
    {
      "Key Prefix": "03m",
      "Object Type": "ExternalServiceType"
    },
    {
      "Key Prefix": "03n",
      "Object Type": "ApexClassIdentifier"
    },
    {
      "Key Prefix": "03o",
      "Object Type": "ExternalActionParameter"
    },
    {
      "Key Prefix": "03q",
      "Object Type": "ApexClassIdentifierRelationship"
    },
    {
      "Key Prefix": "03r",
      "Object Type": "AssignedResource"
    },
    {
      "Key Prefix": "03s",
      "Object Type": "ContactShare"
    },
    {
      "Key Prefix": "03u",
      "Object Type": "UserPreference"
    },
    {
      "Key Prefix": "03v",
      "Object Type": "Package2Member"
    },
    {
      "Key Prefix": "40",
      "Object Type": "ReportParam"
    },
    {
      "Key Prefix": "41",
      "Object Type": "ACC_TERRITORY_ASSIGN"
    },
    {
      "Key Prefix": "42",
      "Object Type": "ACC_TERR_ASSIGN_RULE_ITEM"
    },
    {
      "Key Prefix": "43",
      "Object Type": "OutboundField"
    },
    {
      "Key Prefix": "44",
      "Object Type": "ExternalizedReference"
    },
    {
      "Key Prefix": "45",
      "Object Type": "PartnerNetworkSetup"
    },
    {
      "Key Prefix": "49",
      "Object Type": "OpportunitySplit"
    },
    {
      "Key Prefix": "04B",
      "Object Type": "Bookmark"
    },
    {
      "Key Prefix": "04E",
      "Object Type": "SandOmObserver"
    },
    {
      "Key Prefix": "04F",
      "Object Type": "LoginGeo"
    },
    {
      "Key Prefix": "04G",
      "Object Type": "DatacloudIndustryCode"
    },
    {
      "Key Prefix": "04H",
      "Object Type": "InstanceDirective"
    },
    {
      "Key Prefix": "04I",
      "Object Type": "EmbeddedServiceConfig"
    },
    {
      "Key Prefix": "04P",
      "Object Type": "PartnerNetworkConnection"
    },
    {
      "Key Prefix": "04Q",
      "Object Type": "LearningItem"
    },
    {
      "Key Prefix": "04R",
      "Object Type": "LearningLink"
    },
    {
      "Key Prefix": "04S",
      "Object Type": "USER_TERRITORY"
    },
    {
      "Key Prefix": "04T",
      "Object Type": "TERRITORY"
    },
    {
      "Key Prefix": "04U",
      "Object Type": "DNB_ACCOUNT_MAPPING"
    },
    {
      "Key Prefix": "04V",
      "Object Type": "PartnerNetworkRecordConnection"
    },
    {
      "Key Prefix": "04W",
      "Object Type": "RevenueForecastHistory"
    },
    {
      "Key Prefix": "04X",
      "Object Type": "QuantityForecastHistory"
    },
    {
      "Key Prefix": "04Y",
      "Object Type": "ActionFieldUpdate"
    },
    {
      "Key Prefix": "04Z",
      "Object Type": "EntityLock"
    },
    {
      "Key Prefix": "04a",
      "Object Type": "ProcessDefinition"
    },
    {
      "Key Prefix": "04b",
      "Object Type": "ProcessNode"
    },
    {
      "Key Prefix": "04c",
      "Object Type": "ProcessTransition"
    },
    {
      "Key Prefix": "04d",
      "Object Type": "ProcessTransitionCondition"
    },
    {
      "Key Prefix": "04e",
      "Object Type": "ProcessActionItem"
    },
    {
      "Key Prefix": "04f",
      "Object Type": "ProcessWorkitemProperties"
    },
    {
      "Key Prefix": "04g",
      "Object Type": "ProcessInstance"
    },
    {
      "Key Prefix": "04h",
      "Object Type": "ProcessInstanceStep"
    },
    {
      "Key Prefix": "04i",
      "Object Type": "ProcessInstanceWorkitem"
    },
    {
      "Key Prefix": "04j",
      "Object Type": "ProcessAllowedSubmitter"
    },
    {
      "Key Prefix": "04k",
      "Object Type": "ActionOutboundMessage"
    },
    {
      "Key Prefix": "04l",
      "Object Type": "OutboundMessage"
    },
    {
      "Key Prefix": "04m",
      "Object Type": "AdditionalNumber"
    },
    {
      "Key Prefix": "04n",
      "Object Type": "SoftphoneLayout"
    },
    {
      "Key Prefix": "04o",
      "Object Type": "SoftphoneLayoutSection"
    },
    {
      "Key Prefix": "04p",
      "Object Type": "SoftphoneLayoutItem"
    },
    {
      "Key Prefix": "04q",
      "Object Type": "SoftphoneLayoutInfoField"
    },
    {
      "Key Prefix": "04r",
      "Object Type": "SoftphoneLayoutCallType"
    },
    {
      "Key Prefix": "04s",
      "Object Type": "AsyncRequest"
    },
    {
      "Key Prefix": "04t",
      "Object Type": "AllPackageVersion"
    },
    {
      "Key Prefix": "04t",
      "Object Type": "MetadataPackageVersion"
    },
    {
      "Key Prefix": "04u",
      "Object Type": "ActionOverride"
    },
    {
      "Key Prefix": "04v",
      "Object Type": "CallCenter"
    },
    {
      "Key Prefix": "04w",
      "Object Type": "DatedConversionRate"
    },
    {
      "Key Prefix": "04x",
      "Object Type": "PackageExtension"
    },
    {
      "Key Prefix": "04y",
      "Object Type": "ListColumn"
    },
    {
      "Key Prefix": "04z",
      "Object Type": "LayoutItemActionRef"
    },
    {
      "Key Prefix": "50",
      "Object Type": "PackageLicense"
    },
    {
      "Key Prefix": "51",
      "Object Type": "UserPackageLicense"
    },
    {
      "Key Prefix": "52",
      "Object Type": "SfdcOutboundMessage"
    },
    {
      "Key Prefix": "53",
      "Object Type": "WorkflowTimeTrigger"
    },
    {
      "Key Prefix": "54",
      "Object Type": "WorkflowTimeAction"
    },
    {
      "Key Prefix": "55",
      "Object Type": "WorkflowTimeQueue"
    },
    {
      "Key Prefix": "56",
      "Object Type": "ContentTagName"
    },
    {
      "Key Prefix": "57",
      "Object Type": "ContentDocumentSubscription"
    },
    {
      "Key Prefix": "58",
      "Object Type": "ContentWorkspace"
    },
    {
      "Key Prefix": "59",
      "Object Type": "ContentWorkspaceDoc"
    },
    {
      "Key Prefix": "05A",
      "Object Type": "ContentWorkspaceMember"
    },
    {
      "Key Prefix": "05B",
      "Object Type": "CampaignCriteriaSharingRule"
    },
    {
      "Key Prefix": "05C",
      "Object Type": "ContentVersionComment"
    },
    {
      "Key Prefix": "05D",
      "Object Type": "ContentDistribution"
    },
    {
      "Key Prefix": "05E",
      "Object Type": "AsyncApiBatchOptions"
    },
    {
      "Key Prefix": "05F",
      "Object Type": "ApexTestSuite"
    },
    {
      "Key Prefix": "05G",
      "Object Type": "IpWhitelist"
    },
    {
      "Key Prefix": "05H",
      "Object Type": "ContentDistributionView"
    },
    {
      "Key Prefix": "05I",
      "Object Type": "CampaignSharingRuleFilterItem"
    },
    {
      "Key Prefix": "05J",
      "Object Type": "ContentVersionRating"
    },
    {
      "Key Prefix": "05K",
      "Object Type": "ContentVersionRenditionContent"
    },
    {
      "Key Prefix": "05L",
      "Object Type": "DBCThumbnailFilter"
    },
    {
      "Key Prefix": "05M",
      "Object Type": "Experiment"
    },
    {
      "Key Prefix": "05N",
      "Object Type": "ContentVersionTagName"
    },
    {
      "Key Prefix": "05P",
      "Object Type": "ContentWorkspacePermission"
    },
    {
      "Key Prefix": "05Q",
      "Object Type": "ContentTagSubscription"
    },
    {
      "Key Prefix": "05R",
      "Object Type": "ContentWorkspaceSubscription"
    },
    {
      "Key Prefix": "05S",
      "Object Type": "ContentUserSubscription"
    },
    {
      "Key Prefix": "05T",
      "Object Type": "ContentBody"
    },
    {
      "Key Prefix": "05U",
      "Object Type": "EntityFeedLayout"
    },
    {
      "Key Prefix": "05V",
      "Object Type": "ContentNotification"
    },
    {
      "Key Prefix": "05W",
      "Object Type": "ContentNotificationParam"
    },
    {
      "Key Prefix": "05X",
      "Object Type": "DocumentAttachmentMap"
    },
    {
      "Key Prefix": "05Z",
      "Object Type": "ContentWorkspaceRecentEvent"
    },
    {
      "Key Prefix": "05a",
      "Object Type": "DataStatistics"
    },
    {
      "Key Prefix": "05c",
      "Object Type": "CopyExportChunk2"
    },
    {
      "Key Prefix": "05d",
      "Object Type": "CopyImportChunk2"
    },
    {
      "Key Prefix": "05e",
      "Object Type": "CopyEntityTally2"
    },
    {
      "Key Prefix": "05f",
      "Object Type": "AcceptedRecommendation"
    },
    {
      "Key Prefix": "05g",
      "Object Type": "TwoFactorTempCode"
    },
    {
      "Key Prefix": "05i",
      "Object Type": "Package2Version"
    },
    {
      "Key Prefix": "05j",
      "Object Type": "CommunityTemplateDefinition"
    },
    {
      "Key Prefix": "05k",
      "Object Type": "ColorDefinition"
    },
    {
      "Key Prefix": "05l",
      "Object Type": "CommunityThemeDefinition"
    },
    {
      "Key Prefix": "05m",
      "Object Type": "ApexTestRunResult"
    },
    {
      "Key Prefix": "05n",
      "Object Type": "ApexTestResultLimits"
    },
    {
      "Key Prefix": "05o",
      "Object Type": "EclairNgMapGeoJson"
    },
    {
      "Key Prefix": "05p",
      "Object Type": "EclairNgMap"
    },
    {
      "Key Prefix": "05q",
      "Object Type": "AssistantRecommendation"
    },
    {
      "Key Prefix": "05t",
      "Object Type": "CustomEntityTranslation"
    },
    {
      "Key Prefix": "05v",
      "Object Type": "DataPrepRecipe"
    },
    {
      "Key Prefix": "05y",
      "Object Type": "DirectMessage"
    },
    {
      "Key Prefix": "05z",
      "Object Type": "DirectMessageMember"
    },
    {
      "Key Prefix": "60",
      "Object Type": "Portal"
    },
    {
      "Key Prefix": "61",
      "Object Type": "PortalAccount"
    },
    {
      "Key Prefix": "62",
      "Object Type": "PortalStyleConfig"
    },
    {
      "Key Prefix": "63",
      "Object Type": "MobileConfig"
    },
    {
      "Key Prefix": "64",
      "Object Type": "QuerySet"
    },
    {
      "Key Prefix": "65",
      "Object Type": "QuerySetItem"
    },
    {
      "Key Prefix": "66",
      "Object Type": "ApexPage"
    },
    {
      "Key Prefix": "67",
      "Object Type": "PortalMember"
    },
    {
      "Key Prefix": "68",
      "Object Type": "ContentVersion"
    },
    {
      "Key Prefix": "69",
      "Object Type": "ContentDocument"
    },
    {
      "Key Prefix": "69",
      "Object Type": "ContentNote"
    },
    {
      "Key Prefix": "06A",
      "Object Type": "ContentDocumentLink"
    },
    {
      "Key Prefix": "06B",
      "Object Type": "ContentWorkspaceAllowedRecType"
    },
    {
      "Key Prefix": "06E",
      "Object Type": "DandBCompany"
    },
    {
      "Key Prefix": "06F",
      "Object Type": "EmailCapture"
    },
    {
      "Key Prefix": "06G",
      "Object Type": "CustomConsoleComponent"
    },
    {
      "Key Prefix": "06M",
      "Object Type": "LogoutEvent"
    },
    {
      "Key Prefix": "06N",
      "Object Type": "ApplicationDependency"
    },
    {
      "Key Prefix": "06O",
      "Object Type": "ServiceDeskAttributes"
    },
    {
      "Key Prefix": "06P",
      "Object Type": "Application"
    },
    {
      "Key Prefix": "06V",
      "Object Type": "InsightsExternalData"
    },
    {
      "Key Prefix": "06W",
      "Object Type": "InsightsExternalDataPart"
    },
    {
      "Key Prefix": "06Y",
      "Object Type": "FeedActionDefinition"
    },
    {
      "Key Prefix": "06a",
      "Object Type": "LocalNamespace"
    },
    {
      "Key Prefix": "06b",
      "Object Type": "FeedActionState"
    },
    {
      "Key Prefix": "06c",
      "Object Type": "EltWorkflowAudit"
    },
    {
      "Key Prefix": "06d",
      "Object Type": "GrantedByLicense"
    },
    {
      "Key Prefix": "06e",
      "Object Type": "DdcProspectorMetrics"
    },
    {
      "Key Prefix": "06f",
      "Object Type": "EdgeMartDataShard"
    },
    {
      "Key Prefix": "06g",
      "Object Type": "EdgeMartDataShardFile"
    },
    {
      "Key Prefix": "06h",
      "Object Type": "FileSearchActivity"
    },
    {
      "Key Prefix": "06i",
      "Object Type": "FlexQueueItem"
    },
    {
      "Key Prefix": "06j",
      "Object Type": "ApexEmailNotification"
    },
    {
      "Key Prefix": "06k",
      "Object Type": "ProfileActionOverride"
    },
    {
      "Key Prefix": "06l",
      "Object Type": "OverridableEntities"
    },
    {
      "Key Prefix": "06m",
      "Object Type": "AppDefinition"
    },
    {
      "Key Prefix": "06n",
      "Object Type": "ServicePresenceStatusInfo"
    },
    {
      "Key Prefix": "06o",
      "Object Type": "AppTabMember"
    },
    {
      "Key Prefix": "06p",
      "Object Type": "NotifTypeUserSetting"
    },
    {
      "Key Prefix": "06q",
      "Object Type": "BackgroundOperationResult"
    },
    {
      "Key Prefix": "06r",
      "Object Type": "AppNotificationType"
    },
    {
      "Key Prefix": "06s",
      "Object Type": "SkinnyTable"
    },
    {
      "Key Prefix": "06t",
      "Object Type": "SkinnyTableField"
    },
    {
      "Key Prefix": "06u",
      "Object Type": "PresenceUserConfigInfo"
    },
    {
      "Key Prefix": "06v",
      "Object Type": "AppNotifTypeUserSetting"
    },
    {
      "Key Prefix": "06w",
      "Object Type": "AppBrand"
    },
    {
      "Key Prefix": "06y",
      "Object Type": "SubscriberPackageVersionUninstallRequest"
    },
    {
      "Key Prefix": "70",
      "Object Type": "CustomReportType"
    },
    {
      "Key Prefix": "71",
      "Object Type": "CrtObject"
    },
    {
      "Key Prefix": "72",
      "Object Type": "CrtColumn"
    },
    {
      "Key Prefix": "73",
      "Object Type": "CrtLayoutSection"
    },
    {
      "Key Prefix": "74",
      "Object Type": "CorsWhitelistEntry"
    },
    {
      "Key Prefix": "75",
      "Object Type": "DuplicateErrorLog"
    },
    {
      "Key Prefix": "76",
      "Object Type": "RateLimitingNotification"
    },
    {
      "Key Prefix": "77",
      "Object Type": "ApiCapture"
    },
    {
      "Key Prefix": "78",
      "Object Type": "ApiUsage"
    },
    {
      "Key Prefix": "79",
      "Object Type": "MobileMarkedRecord"
    },
    {
      "Key Prefix": "07A",
      "Object Type": "MassMail"
    },
    {
      "Key Prefix": "07D",
      "Object Type": "FeedPostTemplate"
    },
    {
      "Key Prefix": "07E",
      "Object Type": "Sandbox"
    },
    {
      "Key Prefix": "07F",
      "Object Type": "FeedFavorite"
    },
    {
      "Key Prefix": "07G",
      "Object Type": "SummaryRecalcQueue"
    },
    {
      "Key Prefix": "07H",
      "Object Type": "ContentFolder"
    },
    {
      "Key Prefix": "07I",
      "Object Type": "ContentFolderMember"
    },
    {
      "Key Prefix": "07J",
      "Object Type": "ComponentObjectDependency"
    },
    {
      "Key Prefix": "07K",
      "Object Type": "ComponentFeatureDependency"
    },
    {
      "Key Prefix": "07L",
      "Object Type": "ApexLog"
    },
    {
      "Key Prefix": "07M",
      "Object Type": "ApexTestResult"
    },
    {
      "Key Prefix": "07N",
      "Object Type": "ActionLinkTemplateBinding"
    },
    {
      "Key Prefix": "07O",
      "Object Type": "Canvas"
    },
    {
      "Key Prefix": "07P",
      "Object Type": "EntitySizeJob"
    },
    {
      "Key Prefix": "07R",
      "Object Type": "DataCategoryMapping"
    },
    {
      "Key Prefix": "07S",
      "Object Type": "CleanDataService"
    },
    {
      "Key Prefix": "07T",
      "Object Type": "AuthConfig"
    },
    {
      "Key Prefix": "07U",
      "Object Type": "AuthConfigProviders"
    },
    {
      "Key Prefix": "07V",
      "Object Type": "ActionSend"
    },
    {
      "Key Prefix": "07W",
      "Object Type": "CustomBrand"
    },
    {
      "Key Prefix": "07X",
      "Object Type": "CustomBrandAsset"
    },
    {
      "Key Prefix": "07Y",
      "Object Type": "CleanRule"
    },
    {
      "Key Prefix": "07Z",
      "Object Type": "EntityDataSize"
    },
    {
      "Key Prefix": "07a",
      "Object Type": "ApexDebuggerSession"
    },
    {
      "Key Prefix": "07b",
      "Object Type": "ApexDebuggerBreakpoint"
    },
    {
      "Key Prefix": "07c",
      "Object Type": "ApexDebuggerRequest"
    },
    {
      "Key Prefix": "07d",
      "Object Type": "ApexDebuggerEvent"
    },
    {
      "Key Prefix": "07e",
      "Object Type": "FeedPostTemplateItem"
    },
    {
      "Key Prefix": "07f",
      "Object Type": "BluetailFeedback"
    },
    {
      "Key Prefix": "07g",
      "Object Type": "ActionLinkGroupTemplate"
    },
    {
      "Key Prefix": "07h",
      "Object Type": "ConnectedAppOauthPolicy"
    },
    {
      "Key Prefix": "07i",
      "Object Type": "CleanRule"
    },
    {
      "Key Prefix": "07j",
      "Object Type": "ContentSyncSetting"
    },
    {
      "Key Prefix": "07k",
      "Object Type": "AccountContactRelation"
    },
    {
      "Key Prefix": "07l",
      "Object Type": "ActionLinkTemplate"
    },
    {
      "Key Prefix": "07m",
      "Object Type": "DatacloudAddress"
    },
    {
      "Key Prefix": "07n",
      "Object Type": "ApexExecutionOverlayResult"
    },
    {
      "Key Prefix": "07o",
      "Object Type": "EntityLimit"
    },
    {
      "Key Prefix": "07p",
      "Object Type": "UserAppMenuItem"
    },
    {
      "Key Prefix": "07t",
      "Object Type": "ApiEvent"
    },
    {
      "Key Prefix": "07u",
      "Object Type": "UserEntityAccess"
    },
    {
      "Key Prefix": "07v",
      "Object Type": "ContentFolderLink"
    },
    {
      "Key Prefix": "07w",
      "Object Type": "DatacloudIndustryChapter"
    },
    {
      "Key Prefix": "07x",
      "Object Type": "DatacloudIndustrySubChapter"
    },
    {
      "Key Prefix": "07y",
      "Object Type": "DatacloudIndustryContent"
    },
    {
      "Key Prefix": "07z",
      "Object Type": "DatacloudIndustry"
    },
    {
      "Key Prefix": "80",
      "Object Type": "PacCrudPermission"
    },
    {
      "Key Prefix": "81",
      "Object Type": "StaticResource"
    },
    {
      "Key Prefix": "82",
      "Object Type": "UninstallExport"
    },
    {
      "Key Prefix": "83",
      "Object Type": "Vote"
    },
    {
      "Key Prefix": "84",
      "Object Type": "VoteConfig"
    },
    {
      "Key Prefix": "85",
      "Object Type": "VoteStats"
    },
    {
      "Key Prefix": "86",
      "Object Type": "MobileDevice"
    },
    {
      "Key Prefix": "87",
      "Object Type": "Idea"
    },
    {
      "Key Prefix": "08C",
      "Object Type": "DatacloudContact"
    },
    {
      "Key Prefix": "08E",
      "Object Type": "AddressCountry"
    },
    {
      "Key Prefix": "08F",
      "Object Type": "AddressState"
    },
    {
      "Key Prefix": "08G",
      "Object Type": "CleanJobLog"
    },
    {
      "Key Prefix": "08H",
      "Object Type": "CleanBatchErrorLog"
    },
    {
      "Key Prefix": "08I",
      "Object Type": "CleanEntityErrorLog"
    },
    {
      "Key Prefix": "08J",
      "Object Type": "EltWorkflowNode"
    },
    {
      "Key Prefix": "08K",
      "Object Type": "DuplicateRuleMatchRule"
    },
    {
      "Key Prefix": "08M",
      "Object Type": "FeedAttachment"
    },
    {
      "Key Prefix": "08N",
      "Object Type": "ExternalEventMapping"
    },
    {
      "Key Prefix": "08O",
      "Object Type": "FTestSystemCatalogEntity"
    },
    {
      "Key Prefix": "08P",
      "Object Type": "BackgroundOperation"
    },
    {
      "Key Prefix": "08Q",
      "Object Type": "ForecastingOwnerAdjustment"
    },
    {
      "Key Prefix": "08R",
      "Object Type": "FeedMute"
    },
    {
      "Key Prefix": "08U",
      "Object Type": "FeedRevision"
    },
    {
      "Key Prefix": "08V",
      "Object Type": "FTestMetadataCatalogEntity"
    },
    {
      "Key Prefix": "08W",
      "Object Type": "DashboardGridLayout"
    },
    {
      "Key Prefix": "08X",
      "Object Type": "DashboardGridComponent"
    },
    {
      "Key Prefix": "08a",
      "Object Type": "CronJobDetail"
    },
    {
      "Key Prefix": "08c",
      "Object Type": "Package2VersionCreateRequest"
    },
    {
      "Key Prefix": "08d",
      "Object Type": "CampaignOwnerSharingRule"
    },
    {
      "Key Prefix": "08e",
      "Object Type": "CronTrigger"
    },
    {
      "Key Prefix": "08g",
      "Object Type": "CronFiredTrigger"
    },
    {
      "Key Prefix": "08h",
      "Object Type": "EmbeddedServiceLiveAgent"
    },
    {
      "Key Prefix": "08j",
      "Object Type": "Package2OauthConsumer"
    },
    {
      "Key Prefix": "08k",
      "Object Type": "DimensionCustomAction"
    },
    {
      "Key Prefix": "08l",
      "Object Type": "AQTWorkloadData"
    },
    {
      "Key Prefix": "08n",
      "Object Type": "AqtCompoundRecommendedIndex"
    },
    {
      "Key Prefix": "08o",
      "Object Type": "AqtCreatedIndex"
    },
    {
      "Key Prefix": "08p",
      "Object Type": "ServiceAppointment"
    },
    {
      "Key Prefix": "08q",
      "Object Type": "WorkType"
    },
    {
      "Key Prefix": "08r",
      "Object Type": "AqtLongRunningRequestData"
    },
    {
      "Key Prefix": "08s",
      "Object Type": "CampaignShare"
    },
    {
      "Key Prefix": "08t",
      "Object Type": "AqtRIRequestMap"
    },
    {
      "Key Prefix": "08u",
      "Object Type": "AqtRecommendedIndex"
    },
    {
      "Key Prefix": "08v",
      "Object Type": "AqtAwrData"
    },
    {
      "Key Prefix": "08x",
      "Object Type": "InstancePerm"
    },
    {
      "Key Prefix": "08y",
      "Object Type": "CspTrustedSite"
    },
    {
      "Key Prefix": "90",
      "Object Type": "MobileExcludedField"
    },
    {
      "Key Prefix": "91",
      "Object Type": "EmailServicesFunction"
    },
    {
      "Key Prefix": "92",
      "Object Type": "WeeklyDataExport"
    },
    {
      "Key Prefix": "93",
      "Object Type": "EmailServicesAddress"
    },
    {
      "Key Prefix": "94",
      "Object Type": "MobileView"
    },
    {
      "Key Prefix": "95",
      "Object Type": "MobileViewSortColumn"
    },
    {
      "Key Prefix": "96",
      "Object Type": "MobileViewDisplayColumn"
    },
    {
      "Key Prefix": "97",
      "Object Type": "MobileViewFilter"
    },
    {
      "Key Prefix": "98",
      "Object Type": "GoogleDoc"
    },
    {
      "Key Prefix": "99",
      "Object Type": "ApexComponent"
    },
    {
      "Key Prefix": "09A",
      "Object Type": "FeedPollChoice"
    },
    {
      "Key Prefix": "09B",
      "Object Type": "FeedPollVote"
    },
    {
      "Key Prefix": "09C",
      "Object Type": "AsyncApiJobMatchDetail"
    },
    {
      "Key Prefix": "09D",
      "Object Type": "QuickActionDefinition"
    },
    {
      "Key Prefix": "09E",
      "Object Type": "AsyncApiBatchMatchDetail"
    },
    {
      "Key Prefix": "09F",
      "Object Type": "DatacloudPurchaseUsage"
    },
    {
      "Key Prefix": "09G",
      "Object Type": "EnvironmentHubInvitation"
    },
    {
      "Key Prefix": "09H",
      "Object Type": "ConnectedApplication2"
    },
    {
      "Key Prefix": "09I",
      "Object Type": "QuickActionListItem"
    },
    {
      "Key Prefix": "09J",
      "Object Type": "QuickActionList"
    },
    {
      "Key Prefix": "09K",
      "Object Type": "DatacloudCompany"
    },
    {
      "Key Prefix": "09L",
      "Object Type": "ActionFlow"
    },
    {
      "Key Prefix": "09M",
      "Object Type": "ActionFlowParam"
    },
    {
      "Key Prefix": "09N",
      "Object Type": "DatacloudDandBCompany"
    },
    {
      "Key Prefix": "09O",
      "Object Type": "DatacloudOwnedEntity"
    },
    {
      "Key Prefix": "09P",
      "Object Type": "EmailDomainKey"
    },
    {
      "Key Prefix": "09S",
      "Object Type": "AsyncRequestFFX"
    },
    {
      "Key Prefix": "09T",
      "Object Type": "AsyncRequestFFXResult"
    },
    {
      "Key Prefix": "09U",
      "Object Type": "DomainCookieStore"
    },
    {
      "Key Prefix": "09V",
      "Object Type": "DashboardStickyFilter"
    },
    {
      "Key Prefix": "09W",
      "Object Type": "ThirdPartyAccountLinkLocal"
    },
    {
      "Key Prefix": "09X",
      "Object Type": "DcSocialProfileHandle"
    },
    {
      "Key Prefix": "09Y",
      "Object Type": "DcSocialProfile"
    },
    {
      "Key Prefix": "09Z",
      "Object Type": "FeedFilterDefinition"
    },
    {
      "Key Prefix": "09a",
      "Object Type": "Community"
    },
    {
      "Key Prefix": "09d",
      "Object Type": "FeedFilterCriterion"
    },
    {
      "Key Prefix": "09e",
      "Object Type": "InvocableAction"
    },
    {
      "Key Prefix": "09f",
      "Object Type": "InvocableActionParameter"
    },
    {
      "Key Prefix": "09g",
      "Object Type": "InvocableActionPicklist"
    },
    {
      "Key Prefix": "09h",
      "Object Type": "IncrementalCandidate"
    },
    {
      "Key Prefix": "09i",
      "Object Type": "DataAssessmentRecord"
    },
    {
      "Key Prefix": "09j",
      "Object Type": "QoptimizerOption"
    },
    {
      "Key Prefix": "09k",
      "Object Type": "IconDefinition"
    },
    {
      "Key Prefix": "09l",
      "Object Type": "ApexDebuggerLicense"
    },
    {
      "Key Prefix": "09m",
      "Object Type": "FeedEntityUnpublished"
    },
    {
      "Key Prefix": "09s",
      "Object Type": "MassOperationsJobInfo"
    },
    {
      "Key Prefix": "09t",
      "Object Type": "UiFormulaRule"
    },
    {
      "Key Prefix": "09v",
      "Object Type": "SecurityCustomBaseline"
    },
    {
      "Key Prefix": "09w",
      "Object Type": "IQOpportunityEmailAddress"
    },
    {
      "Key Prefix": "09x",
      "Object Type": "CommunityWorkspacesNode"
    },
    {
      "Key Prefix": "09z",
      "Object Type": "EmbeddedServiceQuickAction"
    },
    {
      "Key Prefix": "0A0",
      "Object Type": "ReportJob"
    },
    {
      "Key Prefix": "0A1",
      "Object Type": "ReportJobFieldMap"
    },
    {
      "Key Prefix": "0A2",
      "Object Type": "DevelopmentPackageVersion"
    },
    {
      "Key Prefix": "0A3",
      "Object Type": "InstalledPackageVersion"
    },
    {
      "Key Prefix": "0A4",
      "Object Type": "ProcessTransitionApprover"
    },
    {
      "Key Prefix": "0A5",
      "Object Type": "AllManagedPackageMember"
    },
    {
      "Key Prefix": "0A7",
      "Object Type": "CustomShareRowCause"
    },
    {
      "Key Prefix": "0A8",
      "Object Type": "ReportJobRun"
    },
    {
      "Key Prefix": "0A9",
      "Object Type": "ReportJobRunError"
    },
    {
      "Key Prefix": "0AB",
      "Object Type": "ProfilePortalDelegate"
    },
    {
      "Key Prefix": "0AD",
      "Object Type": "PackageEvent"
    },
    {
      "Key Prefix": "0AF",
      "Object Type": "FolderShare"
    },
    {
      "Key Prefix": "0AH",
      "Object Type": "CompactLayout"
    },
    {
      "Key Prefix": "0AI",
      "Object Type": "FirehoseCheckpoint"
    },
    {
      "Key Prefix": "0AJ",
      "Object Type": "ComponentInstanceProperty"
    },
    {
      "Key Prefix": "0AK",
      "Object Type": "ComponentInstance"
    },
    {
      "Key Prefix": "0AL",
      "Object Type": "ExternalSocialAccount"
    },
    {
      "Key Prefix": "12:00 AM",
      "Object Type": "CompactLayoutItem"
    },
    {
      "Key Prefix": "0AN",
      "Object Type": "CompactLayoutMapping"
    },
    {
      "Key Prefix": "0AO",
      "Object Type": "CopyExport"
    },
    {
      "Key Prefix": "0AP",
      "Object Type": "CopyImport"
    },
    {
      "Key Prefix": "0AQ",
      "Object Type": "CopyExportChunk"
    },
    {
      "Key Prefix": "0AR",
      "Object Type": "CopyImportChunk"
    },
    {
      "Key Prefix": "0AS",
      "Object Type": "CopyEntityTally"
    },
    {
      "Key Prefix": "0AT",
      "Object Type": "EventLogFile"
    },
    {
      "Key Prefix": "0AU",
      "Object Type": "AuthSecurityLevel"
    },
    {
      "Key Prefix": "0AV",
      "Object Type": "CopyExportObserverInfo"
    },
    {
      "Key Prefix": "0AW",
      "Object Type": "CanvasFeedItem"
    },
    {
      "Key Prefix": "0AX",
      "Object Type": "ConsolePersonalization"
    },
    {
      "Key Prefix": "0AY",
      "Object Type": "ExternalEvent"
    },
    {
      "Key Prefix": "0AZ",
      "Object Type": "ActionApex"
    },
    {
      "Key Prefix": "0Aa",
      "Object Type": "CollaborationGroupRecord"
    },
    {
      "Key Prefix": "0Ab",
      "Object Type": "AuraDefinitionBundle"
    },
    {
      "Key Prefix": "0Ad",
      "Object Type": "AuraDefinition"
    },
    {
      "Key Prefix": "0Af",
      "Object Type": "DeployRequest"
    },
    {
      "Key Prefix": "0Ag",
      "Object Type": "ActionLinkGroup"
    },
    {
      "Key Prefix": "0Ah",
      "Object Type": "ConferenceNumber"
    },
    {
      "Key Prefix": "0Ai",
      "Object Type": "DeployMessage"
    },
    {
      "Key Prefix": "0Aj",
      "Object Type": "AsyncApiTransformationSpec"
    },
    {
      "Key Prefix": "0Ak",
      "Object Type": "AuthSession"
    },
    {
      "Key Prefix": "0Al",
      "Object Type": "DeployTestResult"
    },
    {
      "Key Prefix": "12:00 AM",
      "Object Type": "SplitMapping"
    },
    {
      "Key Prefix": "0An",
      "Object Type": "ActionLink"
    },
    {
      "Key Prefix": "0Ao",
      "Object Type": "SplitPod"
    },
    {
      "Key Prefix": "0Ap",
      "Object Type": "Split"
    },
    {
      "Key Prefix": "0Aq",
      "Object Type": "ActionLinkGroupAssoc"
    },
    {
      "Key Prefix": "0Ar",
      "Object Type": "SplitAction"
    },
    {
      "Key Prefix": "0As",
      "Object Type": "SplitActionResult"
    },
    {
      "Key Prefix": "0At",
      "Object Type": "ActionLinkUserState"
    },
    {
      "Key Prefix": "0Au",
      "Object Type": "AnalyticNotification"
    },
    {
      "Key Prefix": "0Av",
      "Object Type": "AnalyticThreshold"
    },
    {
      "Key Prefix": "0Aw",
      "Object Type": "AnalyticCondition"
    },
    {
      "Key Prefix": "0Ax",
      "Object Type": "ContentVersioningPolicy"
    },
    {
      "Key Prefix": "0Ay",
      "Object Type": "AnalyticAction"
    },
    {
      "Key Prefix": "0Az",
      "Object Type": "AuraResource"
    },
    {
      "Key Prefix": "0B0",
      "Object Type": "MobileEntitySetting"
    },
    {
      "Key Prefix": "0B1",
      "Object Type": "MessageIdentifier"
    },
    {
      "Key Prefix": "0B2",
      "Object Type": "PortalLanguageConfig"
    },
    {
      "Key Prefix": "0B3",
      "Object Type": "PortalLanguageTabConfig"
    },
    {
      "Key Prefix": "0B9",
      "Object Type": "MobileTab"
    },
    {
      "Key Prefix": "0BA",
      "Object Type": "CustomDataType"
    },
    {
      "Key Prefix": "0BB",
      "Object Type": "CustomDataTypeComponent"
    },
    {
      "Key Prefix": "0BC",
      "Object Type": "CustomFieldDataColumn"
    },
    {
      "Key Prefix": "0BE",
      "Object Type": "FileFieldData"
    },
    {
      "Key Prefix": "0BF",
      "Object Type": "ComponentAppVersion"
    },
    {
      "Key Prefix": "0BG",
      "Object Type": "CampaignInfluenceAdjustment"
    },
    {
      "Key Prefix": "0BH",
      "Object Type": "AllManagedClassRelationship"
    },
    {
      "Key Prefix": "0BI",
      "Object Type": "ContentVersionMap"
    },
    {
      "Key Prefix": "0BJ",
      "Object Type": "ActionAssignTeam"
    },
    {
      "Key Prefix": "0BL",
      "Object Type": "PackageIdMapping"
    },
    {
      "Key Prefix": "0BM",
      "Object Type": "Connection"
    },
    {
      "Key Prefix": "0BR",
      "Object Type": "LogSearchResult"
    },
    {
      "Key Prefix": "0BV",
      "Object Type": "OpportunityCriteriaSharingRule"
    },
    {
      "Key Prefix": "0BW",
      "Object Type": "MobilePushDevice"
    },
    {
      "Key Prefix": "0BX",
      "Object Type": "HistoricalEntityConfig"
    },
    {
      "Key Prefix": "0BY",
      "Object Type": "MqSlaRequest"
    },
    {
      "Key Prefix": "0BZ",
      "Object Type": "EmailBrand"
    },
    {
      "Key Prefix": "0Ba",
      "Object Type": "LoginBrandAsset"
    },
    {
      "Key Prefix": "0Bb",
      "Object Type": "LoginBrand"
    },
    {
      "Key Prefix": "0Bc",
      "Object Type": "MqSlaJob"
    },
    {
      "Key Prefix": "0Bd",
      "Object Type": "HistoricalFieldConfig"
    },
    {
      "Key Prefix": "0Be",
      "Object Type": "HistoricalTransactionPrefix"
    },
    {
      "Key Prefix": "0Bf",
      "Object Type": "HistoricalStaging"
    },
    {
      "Key Prefix": "0Bg",
      "Object Type": "IdeaTheme"
    },
    {
      "Key Prefix": "0Bi",
      "Object Type": "HistoricalSelectorValue"
    },
    {
      "Key Prefix": "0Bk",
      "Object Type": "HistoricalSelector"
    },
    {
      "Key Prefix": "0Bl",
      "Object Type": "BlacklistedConsumer"
    },
    {
      "Key Prefix": "0Bm",
      "Object Type": "DuplicateRule"
    },
    {
      "Key Prefix": "0Bn",
      "Object Type": "ConsoleSidebarContainer"
    },
    {
      "Key Prefix": "0Bo",
      "Object Type": "SidebarComponentLayout"
    },
    {
      "Key Prefix": "0Bp",
      "Object Type": "ListPoolUsage"
    },
    {
      "Key Prefix": "0Bq",
      "Object Type": "EltWorkflowJobTracker"
    },
    {
      "Key Prefix": "0Br",
      "Object Type": "EltWorkflowJobHistory"
    },
    {
      "Key Prefix": "0Bs",
      "Object Type": "DatacloudSocialHandle"
    },
    {
      "Key Prefix": "0Bt",
      "Object Type": "Announcement"
    },
    {
      "Key Prefix": "0Bu",
      "Object Type": "DunsRightAsyncBatch"
    },
    {
      "Key Prefix": "0Bv",
      "Object Type": "DunsRightAsyncAccountRecord"
    },
    {
      "Key Prefix": "0Bw",
      "Object Type": "EltWorkflow"
    },
    {
      "Key Prefix": "0Bx",
      "Object Type": "DunsRightAsyncChunk"
    },
    {
      "Key Prefix": "0By",
      "Object Type": "ContentDispositionAssignment"
    },
    {
      "Key Prefix": "0Bz",
      "Object Type": "AgentWork"
    },
    {
      "Key Prefix": "0C0",
      "Object Type": "Holiday"
    },
    {
      "Key Prefix": "0C1",
      "Object Type": "CustIdxCandidate"
    },
    {
      "Key Prefix": "0C2",
      "Object Type": "MobileSession"
    },
    {
      "Key Prefix": "0C3",
      "Object Type": "RequestThrottle"
    },
    {
      "Key Prefix": "0C5",
      "Object Type": "Skill"
    },
    {
      "Key Prefix": "0C6",
      "Object Type": "LiveChatUserConfig"
    },
    {
      "Key Prefix": "0C8",
      "Object Type": "SetupAssistantProgress"
    },
    {
      "Key Prefix": "0C9",
      "Object Type": "SkillUser"
    },
    {
      "Key Prefix": "0CA",
      "Object Type": "SkillProfile"
    },
    {
      "Key Prefix": "0CB",
      "Object Type": "LiveChatUserConfigUser"
    },
    {
      "Key Prefix": "0CC",
      "Object Type": "SiteChangelistComponent"
    },
    {
      "Key Prefix": "0CD",
      "Object Type": "LiveChatUserConfigProfile"
    },
    {
      "Key Prefix": "0CE",
      "Object Type": "GroupSubscription"
    },
    {
      "Key Prefix": "0CF",
      "Object Type": "ChatterNowUserFavorites"
    },
    {
      "Key Prefix": "0CG",
      "Object Type": "MailAppSettings"
    },
    {
      "Key Prefix": "0CH",
      "Object Type": "ContentHubItem"
    },
    {
      "Key Prefix": "0CI",
      "Object Type": "EntityImplements"
    },
    {
      "Key Prefix": "0CJ",
      "Object Type": "FieldImplements"
    },
    {
      "Key Prefix": "0CK",
      "Object Type": "MailAppExchangeWhitelist"
    },
    {
      "Key Prefix": "0CL",
      "Object Type": "SiteChangelist"
    },
    {
      "Key Prefix": "0CM",
      "Object Type": "ChatSessionMembers"
    },
    {
      "Key Prefix": "0CO",
      "Object Type": "MailAppExchangeUserMap"
    },
    {
      "Key Prefix": "0CP",
      "Object Type": "CustomPermission"
    },
    {
      "Key Prefix": "0CQ",
      "Object Type": "OauthToken"
    },
    {
      "Key Prefix": "0CS",
      "Object Type": "ChatterNowUserSettings"
    },
    {
      "Key Prefix": "0CU",
      "Object Type": "OrgSizingDataHolder"
    },
    {
      "Key Prefix": "0CW",
      "Object Type": "OrgSizingInfo"
    },
    {
      "Key Prefix": "0CX",
      "Object Type": "MobilePushUserUpdate"
    },
    {
      "Key Prefix": "0CZ",
      "Object Type": "EmailMessageRelation"
    },
    {
      "Key Prefix": "0Cd",
      "Object Type": "EventBusSubscriber"
    },
    {
      "Key Prefix": "0Ce",
      "Object Type": "FormulaParticle"
    },
    {
      "Key Prefix": "0Cg",
      "Object Type": "OrganizationValueInfo"
    },
    {
      "Key Prefix": "0Ch",
      "Object Type": "LayoutParticle"
    },
    {
      "Key Prefix": "0Ci",
      "Object Type": "AppManifest"
    },
    {
      "Key Prefix": "0Cj",
      "Object Type": "OperationLog"
    },
    {
      "Key Prefix": "0Cl",
      "Object Type": "ForecastingUserPreference"
    },
    {
      "Key Prefix": "0Cn",
      "Object Type": "NotificationMember"
    },
    {
      "Key Prefix": "0Co",
      "Object Type": "ProductItem"
    },
    {
      "Key Prefix": "0Ct",
      "Object Type": "ManagedContentBlock"
    },
    {
      "Key Prefix": "0Cu",
      "Object Type": "ManagedContentBlockVersion"
    },
    {
      "Key Prefix": "0Cv",
      "Object Type": "KanbanView"
    },
    {
      "Key Prefix": "0Cw",
      "Object Type": "PartnerMarketingBudget"
    },
    {
      "Key Prefix": "0Cy",
      "Object Type": "OwnerChangeOptionInfo"
    },
    {
      "Key Prefix": "0Cz",
      "Object Type": "Setting"
    },
    {
      "Key Prefix": "0D0",
      "Object Type": "CustomIndexUsage"
    },
    {
      "Key Prefix": "0D1",
      "Object Type": "DataCategoryGroup"
    },
    {
      "Key Prefix": "0D2",
      "Object Type": "OrgWideEmailAddress"
    },
    {
      "Key Prefix": "0D3",
      "Object Type": "OrgEmailAddressSecurity"
    },
    {
      "Key Prefix": "0D4",
      "Object Type": "LeadCriteriaSharingRule"
    },
    {
      "Key Prefix": "0D5",
      "Object Type": "FeedItem"
    },
    {
      "Key Prefix": "0D6",
      "Object Type": "FeedTrackedChange"
    },
    {
      "Key Prefix": "0D7",
      "Object Type": "FeedComment"
    },
    {
      "Key Prefix": "0D8",
      "Object Type": "AllManagedMemberOption"
    },
    {
      "Key Prefix": "0D9",
      "Object Type": "LeadSharingRuleFilterItem"
    },
    {
      "Key Prefix": "0DA",
      "Object Type": "EntityCategoryGroup"
    },
    {
      "Key Prefix": "0DB",
      "Object Type": "Network"
    },
    {
      "Key Prefix": "0DC",
      "Object Type": "ProcessTransitionAction"
    },
    {
      "Key Prefix": "0DD",
      "Object Type": "SynonymGroup"
    },
    {
      "Key Prefix": "0DE",
      "Object Type": "Synonym"
    },
    {
      "Key Prefix": "0DF",
      "Object Type": "VersionSet"
    },
    {
      "Key Prefix": "0DG",
      "Object Type": "NamedFilter"
    },
    {
      "Key Prefix": "0DH",
      "Object Type": "FieldAttributes"
    },
    {
      "Key Prefix": "0DL",
      "Object Type": "NetworkMemberGroup"
    },
    {
      "Key Prefix": "0DM",
      "Object Type": "Site"
    },
    {
      "Key Prefix": "0DN",
      "Object Type": "SitePageOverride"
    },
    {
      "Key Prefix": "0DO",
      "Object Type": "NetworkMember"
    },
    {
      "Key Prefix": "0DQ",
      "Object Type": "IndexKeyDefinitionItem"
    },
    {
      "Key Prefix": "0DR",
      "Object Type": "AndroidPushApplicationSetup"
    },
    {
      "Key Prefix": "0DS",
      "Object Type": "AppMenuItem"
    },
    {
      "Key Prefix": "0DT",
      "Object Type": "IdeaReputationLevel"
    },
    {
      "Key Prefix": "0DU",
      "Object Type": "LimitUsageHistory"
    },
    {
      "Key Prefix": "0DV",
      "Object Type": "PushUpgradeRequest"
    },
    {
      "Key Prefix": "0DV",
      "Object Type": "PackagePushRequest"
    },
    {
      "Key Prefix": "0DW",
      "Object Type": "IdeaReputation"
    },
    {
      "Key Prefix": "0DX",
      "Object Type": "PushUpgradeJob"
    },
    {
      "Key Prefix": "0DX",
      "Object Type": "PackagePushJob"
    },
    {
      "Key Prefix": "0DY",
      "Object Type": "PushUpgradeJobError"
    },
    {
      "Key Prefix": "0DY",
      "Object Type": "PackagePushError"
    },
    {
      "Key Prefix": "0DZ",
      "Object Type": "LiveChatTranscriptEvent"
    },
    {
      "Key Prefix": "0Db",
      "Object Type": "ForecastingType"
    },
    {
      "Key Prefix": "0Dd",
      "Object Type": "ListViewChart"
    },
    {
      "Key Prefix": "0De",
      "Object Type": "ListViewChartInstance"
    },
    {
      "Key Prefix": "0Df",
      "Object Type": "InstanceSizeJob"
    },
    {
      "Key Prefix": "0Dg",
      "Object Type": "FeedEntry"
    },
    {
      "Key Prefix": "0Dh",
      "Object Type": "MaterializedFeedEntry"
    },
    {
      "Key Prefix": "0Di",
      "Object Type": "FeedClumpMapping"
    },
    {
      "Key Prefix": "0Dj",
      "Object Type": "FeedClumpInfo"
    },
    {
      "Key Prefix": "0Dk",
      "Object Type": "ObjectMapping"
    },
    {
      "Key Prefix": "0Dl",
      "Object Type": "ObjectMappingField"
    },
    {
      "Key Prefix": "0Dm",
      "Object Type": "NetworkSelfRegistration"
    },
    {
      "Key Prefix": "0Dp",
      "Object Type": "NetworkPageOverride"
    },
    {
      "Key Prefix": "0Dq",
      "Object Type": "TwoFactorAuthPairing"
    },
    {
      "Key Prefix": "0Dr",
      "Object Type": "MailAppOwaWhitelist"
    },
    {
      "Key Prefix": "0Ds",
      "Object Type": "UserAppInfo"
    },
    {
      "Key Prefix": "0Dt",
      "Object Type": "OrgSigningKey"
    },
    {
      "Key Prefix": "0Du",
      "Object Type": "ExchangeUserMapping"
    },
    {
      "Key Prefix": "0Dv",
      "Object Type": "NotifTypeOrgSetting"
    },
    {
      "Key Prefix": "0Dy",
      "Object Type": "GlobalVariableType"
    },
    {
      "Key Prefix": "0Dz",
      "Object Type": "OptimizerMetricsAverage"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "EmailSyncConfig"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "EmailSyncEntitySetting"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "EmailSyncFieldMapping"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "EmailSyncValueMapping"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "EmailConfigEntitySetting"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "EmailUserEntitySetting"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "EmailSyncAdvancedSetting"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "EntitlementContact"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "EntitySubscription"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "ProductEntitlementTemplate"
    },
    {
      "Key Prefix": "0EA",
      "Object Type": "PackageVersionPatchOrg"
    },
    {
      "Key Prefix": "0EB",
      "Object Type": "Renderer"
    },
    {
      "Key Prefix": "0ED",
      "Object Type": "LpuAccessMapping"
    },
    {
      "Key Prefix": "0EE",
      "Object Type": "DeployDirection"
    },
    {
      "Key Prefix": "0EF",
      "Object Type": "RequestTrace"
    },
    {
      "Key Prefix": "0EG",
      "Object Type": "ReportChart"
    },
    {
      "Key Prefix": "0EH",
      "Object Type": "SummaryLayout"
    },
    {
      "Key Prefix": "0EI",
      "Object Type": "SummaryLayoutItem"
    },
    {
      "Key Prefix": "0EJ",
      "Object Type": "SummaryLayoutSliceInfo"
    },
    {
      "Key Prefix": "0EM",
      "Object Type": "ContentReference"
    },
    {
      "Key Prefix": "0EO",
      "Object Type": "PicklistItemProperty"
    },
    {
      "Key Prefix": "0EP",
      "Object Type": "InboundChangeSet"
    },
    {
      "Key Prefix": "0EQ",
      "Object Type": "CategoryJobTask"
    },
    {
      "Key Prefix": "0ER",
      "Object Type": "RichTextAreaFieldData"
    },
    {
      "Key Prefix": "0EV",
      "Object Type": "AllInstalledPackageVersion"
    },
    {
      "Key Prefix": "0EW",
      "Object Type": "ChangeSetDeployHistory"
    },
    {
      "Key Prefix": "0EX",
      "Object Type": "ChangeSetDeployMessage"
    },
    {
      "Key Prefix": "0EZ",
      "Object Type": "S2XExchOAuthCredential"
    },
    {
      "Key Prefix": "0Eb",
      "Object Type": "ModuleDependency"
    },
    {
      "Key Prefix": "0Ee",
      "Object Type": "HistoricalDataFilter"
    },
    {
      "Key Prefix": "0Ef",
      "Object Type": "HistoricalDataFilterItem"
    },
    {
      "Key Prefix": "0Eg",
      "Object Type": "GlobalDbKey"
    },
    {
      "Key Prefix": "0Eh",
      "Object Type": "TodayCard"
    },
    {
      "Key Prefix": "0El",
      "Object Type": "InstalledMobileApp"
    },
    {
      "Key Prefix": "0Em",
      "Object Type": "TodayCardProperty"
    },
    {
      "Key Prefix": "0En",
      "Object Type": "ReadOnlyMemcachedServer"
    },
    {
      "Key Prefix": "0Ep",
      "Object Type": "ReadOnlyUserLogin"
    },
    {
      "Key Prefix": "0Eq",
      "Object Type": "LeadConvertSettings"
    },
    {
      "Key Prefix": "0Er",
      "Object Type": "PlatformCachePartition"
    },
    {
      "Key Prefix": "0Es",
      "Object Type": "TemplateDeployment"
    },
    {
      "Key Prefix": "0Et",
      "Object Type": "ReadOnlyAuthSession"
    },
    {
      "Key Prefix": "0Eu",
      "Object Type": "TemplateDeploymentItem"
    },
    {
      "Key Prefix": "0Ev",
      "Object Type": "PlatformCachePartitionType"
    },
    {
      "Key Prefix": "0Ex",
      "Object Type": "PlatformCacheTrial"
    },
    {
      "Key Prefix": "0Ey",
      "Object Type": "ReadOnlyRedisServer"
    },
    {
      "Key Prefix": "0Ez",
      "Object Type": "ReadOnlyLoginHistory"
    },
    {
      "Key Prefix": "0F0",
      "Object Type": "EmailTempAttachmentMap"
    },
    {
      "Key Prefix": "0F1",
      "Object Type": "DuplicateRuleFilter"
    },
    {
      "Key Prefix": "0F2",
      "Object Type": "HadoopCounter"
    },
    {
      "Key Prefix": "0F3",
      "Object Type": "ReportBlock"
    },
    {
      "Key Prefix": "0F5",
      "Object Type": "PhotoItem"
    },
    {
      "Key Prefix": "0F7",
      "Object Type": "FeedPost"
    },
    {
      "Key Prefix": "0F8",
      "Object Type": "SoftphoneScreenPopOption"
    },
    {
      "Key Prefix": "0F9",
      "Object Type": "CollaborationGroup"
    },
    {
      "Key Prefix": "0FA",
      "Object Type": "CsnDomain"
    },
    {
      "Key Prefix": "0FB",
      "Object Type": "CollaborationGroupMember"
    },
    {
      "Key Prefix": "0FG",
      "Object Type": "MobilePushServiceDevice"
    },
    {
      "Key Prefix": "0FH",
      "Object Type": "LinkReference"
    },
    {
      "Key Prefix": "0FI",
      "Object Type": "DuplicateRuleFilterItem"
    },
    {
      "Key Prefix": "0FJ",
      "Object Type": "LensFile"
    },
    {
      "Key Prefix": "0FK",
      "Object Type": "Lens"
    },
    {
      "Key Prefix": "0FM",
      "Object Type": "FeedMapping"
    },
    {
      "Key Prefix": "0FO",
      "Object Type": "AssistantProgress"
    },
    {
      "Key Prefix": "0FP",
      "Object Type": "ReportRunTracker"
    },
    {
      "Key Prefix": "0FQ",
      "Object Type": "TrialMaster"
    },
    {
      "Key Prefix": "0FR",
      "Object Type": "PackageOperationError"
    },
    {
      "Key Prefix": "0FT",
      "Object Type": "TopicAssignment"
    },
    {
      "Key Prefix": "0FX",
      "Object Type": "QoptimizerLimitOverride"
    },
    {
      "Key Prefix": "0Fa",
      "Object Type": "ContextFieldAttributes"
    },
    {
      "Key Prefix": "0Fb",
      "Object Type": "EdgeMart"
    },
    {
      "Key Prefix": "0Fc",
      "Object Type": "EdgeMartData"
    },
    {
      "Key Prefix": "0Fd",
      "Object Type": "EdgeMartDataFile"
    },
    {
      "Key Prefix": "0Fe",
      "Object Type": "IdentityConnector"
    },
    {
      "Key Prefix": "0Ff",
      "Object Type": "InboundSocialPost"
    },
    {
      "Key Prefix": "0Fg",
      "Object Type": "InteractionLoop"
    },
    {
      "Key Prefix": "0Fh",
      "Object Type": "InteractionActionCall"
    },
    {
      "Key Prefix": "0Fi",
      "Object Type": "InteractionActionCallParam"
    },
    {
      "Key Prefix": "0Fj",
      "Object Type": "InteractionMetadataValue"
    },
    {
      "Key Prefix": "0Fl",
      "Object Type": "ContentRenditionPolicy"
    },
    {
      "Key Prefix": "0Fm",
      "Object Type": "LensEdgeMart"
    },
    {
      "Key Prefix": "0Fn",
      "Object Type": "EdgeExternalDataFile"
    },
    {
      "Key Prefix": "0Fo",
      "Object Type": "FlowInterview"
    },
    {
      "Key Prefix": "0Fp",
      "Object Type": "HammerResultStatus"
    },
    {
      "Key Prefix": "0Fq",
      "Object Type": "FeedChannel"
    },
    {
      "Key Prefix": "0Fr",
      "Object Type": "FeedChannelSubscription"
    },
    {
      "Key Prefix": "0Fs",
      "Object Type": "OrderOwnerSharingRule"
    },
    {
      "Key Prefix": "0Ft",
      "Object Type": "OrderCriteriaSharingRule"
    },
    {
      "Key Prefix": "0Fu",
      "Object Type": "OrderSharingRuleFilterItem"
    },
    {
      "Key Prefix": "0Fv",
      "Object Type": "InteractionRefOrValue"
    },
    {
      "Key Prefix": "0Fy",
      "Object Type": "OrderShare"
    },
    {
      "Key Prefix": "0Fz",
      "Object Type": "IndexKeyDefinition"
    },
    {
      "Key Prefix": "0G1",
      "Object Type": "FeedFieldHistory"
    },
    {
      "Key Prefix": "0G2",
      "Object Type": "ForecastingCompositeKey"
    },
    {
      "Key Prefix": "0G3",
      "Object Type": "ForecastingItem"
    },
    {
      "Key Prefix": "0G4",
      "Object Type": "OracleAwrSqlstat"
    },
    {
      "Key Prefix": "0G5",
      "Object Type": "OracleAwrSqltext"
    },
    {
      "Key Prefix": "0G6",
      "Object Type": "ForecastingFact"
    },
    {
      "Key Prefix": "0G7",
      "Object Type": "ForecastingAdjustment"
    },
    {
      "Key Prefix": "0G8",
      "Object Type": "ReportBucketField"
    },
    {
      "Key Prefix": "0G9",
      "Object Type": "AccountSharingRuleFilterItem"
    },
    {
      "Key Prefix": "0GC",
      "Object Type": "EmailDisclaimer"
    },
    {
      "Key Prefix": "0GD",
      "Object Type": "ReportBucketFieldValue"
    },
    {
      "Key Prefix": "0GE",
      "Object Type": "ReportBucketFieldSourceValue"
    },
    {
      "Key Prefix": "0GH",
      "Object Type": "SchemaBuilderLayout"
    },
    {
      "Key Prefix": "0GI",
      "Object Type": "SchemaBuilderLayoutItem"
    },
    {
      "Key Prefix": "0GJ",
      "Object Type": "ApplePushApplicationSetup"
    },
    {
      "Key Prefix": "0GK",
      "Object Type": "DuplicateRecordSet"
    },
    {
      "Key Prefix": "0GL",
      "Object Type": "DuplicateRecordItem"
    },
    {
      "Key Prefix": "0GM",
      "Object Type": "MetadataIdentifier"
    },
    {
      "Key Prefix": "0GN",
      "Object Type": "MetadataContent"
    },
    {
      "Key Prefix": "0GO",
      "Object Type": "LiveChatSensitiveDataRule"
    },
    {
      "Key Prefix": "0GP",
      "Object Type": "ProspectorRecModel"
    },
    {
      "Key Prefix": "0GQ",
      "Object Type": "SandboxInfo"
    },
    {
      "Key Prefix": "0GR",
      "Object Type": "SandboxProcess"
    },
    {
      "Key Prefix": "0GS",
      "Object Type": "S2XEventMap"
    },
    {
      "Key Prefix": "0GT",
      "Object Type": "S2XContactMap"
    },
    {
      "Key Prefix": "0GU",
      "Object Type": "LongRunningRequest"
    },
    {
      "Key Prefix": "0GV",
      "Object Type": "SiteDetail"
    },
    {
      "Key Prefix": "0GW",
      "Object Type": "RelatedEntity"
    },
    {
      "Key Prefix": "0GY",
      "Object Type": "Tombstone"
    },
    {
      "Key Prefix": "0Ga",
      "Object Type": "AsyncApiChunkResults"
    },
    {
      "Key Prefix": "0Gc",
      "Object Type": "BusProcessFeedbackConfig"
    },
    {
      "Key Prefix": "0Gf",
      "Object Type": "InterestingSqlFromAwr"
    },
    {
      "Key Prefix": "0Gg",
      "Object Type": "SourceMetadataMember"
    },
    {
      "Key Prefix": "0Gi",
      "Object Type": "SecurityHealthCheck"
    },
    {
      "Key Prefix": "0Gj",
      "Object Type": "TimeSlot"
    },
    {
      "Key Prefix": "0Gm",
      "Object Type": "S2XEventTxnProps"
    },
    {
      "Key Prefix": "0Gn",
      "Object Type": "ProductRequired"
    },
    {
      "Key Prefix": "0Go",
      "Object Type": "AssistantInteraction"
    },
    {
      "Key Prefix": "0Gp",
      "Object Type": "UiFormulaCriterion"
    },
    {
      "Key Prefix": "0Gq",
      "Object Type": "IntelligenceField"
    },
    {
      "Key Prefix": "0Gq",
      "Object Type": "ActivityMetric"
    },
    {
      "Key Prefix": "0Gr",
      "Object Type": "UserLicenseMetrics"
    },
    {
      "Key Prefix": "0Gt",
      "Object Type": "Package2VersionCreateRequestError"
    },
    {
      "Key Prefix": "0Gu",
      "Object Type": "SCSTermsOfService"
    },
    {
      "Key Prefix": "0Gv",
      "Object Type": "ProductConsumed"
    },
    {
      "Key Prefix": "0Gw",
      "Object Type": "S2XSandmanError"
    },
    {
      "Key Prefix": "0Gx",
      "Object Type": "FormulaOperator"
    },
    {
      "Key Prefix": "0Gy",
      "Object Type": "DataIntegrationRecordPurchasePermission"
    },
    {
      "Key Prefix": "0Gz",
      "Object Type": "DiscoveryOrgLicense"
    },
    {
      "Key Prefix": "0H0",
      "Object Type": "SiteRedirectMapping"
    },
    {
      "Key Prefix": "0H1",
      "Object Type": "CollaborationInvitation"
    },
    {
      "Key Prefix": "0H2",
      "Object Type": "SharingSet"
    },
    {
      "Key Prefix": "0H4",
      "Object Type": "ConnectedApplication"
    },
    {
      "Key Prefix": "0H6",
      "Object Type": "ChangeSetUploadHistory"
    },
    {
      "Key Prefix": "0H7",
      "Object Type": "PackageSupportAccess"
    },
    {
      "Key Prefix": "0H9",
      "Object Type": "OracleAwrSqlignore"
    },
    {
      "Key Prefix": "0HC",
      "Object Type": "RecordSalt"
    },
    {
      "Key Prefix": "0HD",
      "Object Type": "PackageUploadRequest"
    },
    {
      "Key Prefix": "0HE",
      "Object Type": "SettingsTemplate"
    },
    {
      "Key Prefix": "0HF",
      "Object Type": "ReadOnlyLoginMessage"
    },
    {
      "Key Prefix": "0HG",
      "Object Type": "EntitySharingModel"
    },
    {
      "Key Prefix": "0HI",
      "Object Type": "ReportBlockAggregate"
    },
    {
      "Key Prefix": "0HJ",
      "Object Type": "LiveChatButtonDeployment"
    },
    {
      "Key Prefix": "0HK",
      "Object Type": "LiveAgentSession"
    },
    {
      "Key Prefix": "0HN",
      "Object Type": "TwoFactorInfo"
    },
    {
      "Key Prefix": "0HO",
      "Object Type": "MobilePushSetupRegistry"
    },
    {
      "Key Prefix": "0HP",
      "Object Type": "UserProvisioningRequest"
    },
    {
      "Key Prefix": "0HQ",
      "Object Type": "ReadOnlyAppserver"
    },
    {
      "Key Prefix": "0HR",
      "Object Type": "MetricsTransmissionHistory"
    },
    {
      "Key Prefix": "0HS",
      "Object Type": "SharingOperation"
    },
    {
      "Key Prefix": "0HT",
      "Object Type": "ScrutinyRun"
    },
    {
      "Key Prefix": "0HU",
      "Object Type": "ProfileSessionSetting"
    },
    {
      "Key Prefix": "0HV",
      "Object Type": "ProfilePasswordPolicy"
    },
    {
      "Key Prefix": "0HW",
      "Object Type": "ConnectedAppSessionPolicy"
    },
    {
      "Key Prefix": "0HX",
      "Object Type": "UserProvMockTarget"
    },
    {
      "Key Prefix": "0HY",
      "Object Type": "UserProvAccountStaging"
    },
    {
      "Key Prefix": "0HZ",
      "Object Type": "ConnectedAppPlugin"
    },
    {
      "Key Prefix": "0Ha",
      "Object Type": "SandOmInfo"
    },
    {
      "Key Prefix": "0Hb",
      "Object Type": "PackageSubscriber"
    },
    {
      "Key Prefix": "0Hc",
      "Object Type": "ProfileTabSetConfiguration"
    },
    {
      "Key Prefix": "0Hd",
      "Object Type": "TestSuiteMembership"
    },
    {
      "Key Prefix": "0He",
      "Object Type": "CaptchaKey"
    },
    {
      "Key Prefix": "0Hf",
      "Object Type": "PackageInstallRequest"
    },
    {
      "Key Prefix": "0Hg",
      "Object Type": "SandstormWhitelist"
    },
    {
      "Key Prefix": "0Hh",
      "Object Type": "ServiceTerritory"
    },
    {
      "Key Prefix": "0Hi",
      "Object Type": "AppIpRange"
    },
    {
      "Key Prefix": "0Hj",
      "Object Type": "AppManifestVersion"
    },
    {
      "Key Prefix": "0Hk",
      "Object Type": "ConnectivityDevConfig"
    },
    {
      "Key Prefix": "0Hl",
      "Object Type": "ConnectivityAttributes"
    },
    {
      "Key Prefix": "0Hn",
      "Object Type": "ServiceResource"
    },
    {
      "Key Prefix": "0Ho",
      "Object Type": "Package2"
    },
    {
      "Key Prefix": "0Hp",
      "Object Type": "SandOmImportInfoDetail"
    },
    {
      "Key Prefix": "0Hq",
      "Object Type": "SandOmInfoDetail"
    },
    {
      "Key Prefix": "0Hr",
      "Object Type": "AssistantRecommendationType"
    },
    {
      "Key Prefix": "0Hs",
      "Object Type": "UserProvisioningLog"
    },
    {
      "Key Prefix": "0Ht",
      "Object Type": "SandOmImportInfo"
    },
    {
      "Key Prefix": "0Hu",
      "Object Type": "ServiceTerritoryMember"
    },
    {
      "Key Prefix": "0Hv",
      "Object Type": "ServiceResourceSkill"
    },
    {
      "Key Prefix": "0Hw",
      "Object Type": "ResourceAbsence"
    },
    {
      "Key Prefix": "0Hx",
      "Object Type": "SkillRequirement"
    },
    {
      "Key Prefix": "0Hy",
      "Object Type": "ServiceResourceCapacity"
    },
    {
      "Key Prefix": "0Hz",
      "Object Type": "ExperimentRequest"
    },
    {
      "Key Prefix": "0I0",
      "Object Type": "FeedLike"
    },
    {
      "Key Prefix": "0I1",
      "Object Type": "DbLockUsage"
    },
    {
      "Key Prefix": "0I2",
      "Object Type": "SiteAsset"
    },
    {
      "Key Prefix": "0I3",
      "Object Type": "SiteComponent"
    },
    {
      "Key Prefix": "0I4",
      "Object Type": "Domain"
    },
    {
      "Key Prefix": "0I5",
      "Object Type": "CollaborationGroupMemberRequest"
    },
    {
      "Key Prefix": "0I6",
      "Object Type": "OpportunitySharingRuleFilterItem"
    },
    {
      "Key Prefix": "0I7",
      "Object Type": "CaseSharingRuleFilterItem"
    },
    {
      "Key Prefix": "0I8",
      "Object Type": "ContactSharingRuleFilterItem"
    },
    {
      "Key Prefix": "0I9",
      "Object Type": "ReportObjectFilterItem"
    },
    {
      "Key Prefix": "0IA",
      "Object Type": "KnowledgeLanguageConfig"
    },
    {
      "Key Prefix": "0IB",
      "Object Type": "DashboardFilter"
    },
    {
      "Key Prefix": "0IC",
      "Object Type": "DashboardFilterItem"
    },
    {
      "Key Prefix": "0ID",
      "Object Type": "DashboardFilterRepCol"
    },
    {
      "Key Prefix": "0IF",
      "Object Type": "PushTopic"
    },
    {
      "Key Prefix": "0IG",
      "Object Type": "MobileDeviceRegistrar"
    },
    {
      "Key Prefix": "0II",
      "Object Type": "FeedCrossReference"
    },
    {
      "Key Prefix": "0IO",
      "Object Type": "BrandingValue"
    },
    {
      "Key Prefix": "0IS",
      "Object Type": "ApexComponentAttribute"
    },
    {
      "Key Prefix": "0IT",
      "Object Type": "GridforceJob"
    },
    {
      "Key Prefix": "0IU",
      "Object Type": "HadoopJob"
    },
    {
      "Key Prefix": "0IV",
      "Object Type": "LogSearch"
    },
    {
      "Key Prefix": "0IW",
      "Object Type": "MobileApplicationDetail"
    },
    {
      "Key Prefix": "0IX",
      "Object Type": "FieldSet"
    },
    {
      "Key Prefix": "0IY",
      "Object Type": "FieldSetItem"
    },
    {
      "Key Prefix": "0IZ",
      "Object Type": "JiffyTrace"
    },
    {
      "Key Prefix": "0Ia",
      "Object Type": "CustomEntityTruncateInfo"
    },
    {
      "Key Prefix": "0Ib",
      "Object Type": "MatchingInformation"
    },
    {
      "Key Prefix": "0Ic",
      "Object Type": "LimitSnapshot"
    },
    {
      "Key Prefix": "0Id",
      "Object Type": "NetworkModeration"
    },
    {
      "Key Prefix": "0Ie",
      "Object Type": "SupervisorAgentConfigSkill"
    },
    {
      "Key Prefix": "0If",
      "Object Type": "LiveChatButtonSkill"
    },
    {
      "Key Prefix": "0Ig",
      "Object Type": "LiveChatTranscriptSkill"
    },
    {
      "Key Prefix": "0Ih",
      "Object Type": "ServiceDeskComponent"
    },
    {
      "Key Prefix": "0Ii",
      "Object Type": "PushProfileMapping"
    },
    {
      "Key Prefix": "0Ij",
      "Object Type": "PushIntent"
    },
    {
      "Key Prefix": "0Ik",
      "Object Type": "Module"
    },
    {
      "Key Prefix": "0Il",
      "Object Type": "ScrutinyPkChunkData"
    },
    {
      "Key Prefix": "0In",
      "Object Type": "PhoenixDataSync"
    },
    {
      "Key Prefix": "0Io",
      "Object Type": "RawEmail"
    },
    {
      "Key Prefix": "0Iq",
      "Object Type": "ObjectTerritory2AssignmentRuleItem"
    },
    {
      "Key Prefix": "0Ir",
      "Object Type": "ObjectTerritory2AssignmentRule"
    },
    {
      "Key Prefix": "0It",
      "Object Type": "WaveDataConnector"
    },
    {
      "Key Prefix": "0Iu",
      "Object Type": "WaveBaseDataset"
    },
    {
      "Key Prefix": "0Iv",
      "Object Type": "WaveBaseField"
    },
    {
      "Key Prefix": "0Iw",
      "Object Type": "RecommendationMetric"
    },
    {
      "Key Prefix": "0Iy",
      "Object Type": "SplitFrameworkResult"
    },
    {
      "Key Prefix": "0Iz",
      "Object Type": "PackageDependency"
    },
    {
      "Key Prefix": "0J0",
      "Object Type": "SetupEntityAccess"
    },
    {
      "Key Prefix": "0J1",
      "Object Type": "EnvironmentHubMember"
    },
    {
      "Key Prefix": "0J2",
      "Object Type": "Personalization"
    },
    {
      "Key Prefix": "0J3",
      "Object Type": "EnvironmentHubMemberRel"
    },
    {
      "Key Prefix": "0J4",
      "Object Type": "SPSamlAttributes"
    },
    {
      "Key Prefix": "0J5",
      "Object Type": "PredictiveModel"
    },
    {
      "Key Prefix": "0J6",
      "Object Type": "NetworkActivityAudit"
    },
    {
      "Key Prefix": "0J7",
      "Object Type": "EnvironmentHub"
    },
    {
      "Key Prefix": "0J8",
      "Object Type": "ServiceDeskHotkey"
    },
    {
      "Key Prefix": "0J9",
      "Object Type": "ForecastingQuota"
    },
    {
      "Key Prefix": "0JB",
      "Object Type": "ObjectTerritory2Association"
    },
    {
      "Key Prefix": "0JD",
      "Object Type": "MatchingRule"
    },
    {
      "Key Prefix": "0JE",
      "Object Type": "MatchingRuleItem"
    },
    {
      "Key Prefix": "0JF",
      "Object Type": "NotifDeliveryUserPref"
    },
    {
      "Key Prefix": "0JJ",
      "Object Type": "MatchIndexValue"
    },
    {
      "Key Prefix": "0JK",
      "Object Type": "MatchIndexDefinition"
    },
    {
      "Key Prefix": "0JL",
      "Object Type": "ServiceDeskCustomStyling"
    },
    {
      "Key Prefix": "0JM",
      "Object Type": "OauthTokenLocal"
    },
    {
      "Key Prefix": "0JO",
      "Object Type": "SearchActivity"
    },
    {
      "Key Prefix": "0JP",
      "Object Type": "RecordOrigin"
    },
    {
      "Key Prefix": "0JR",
      "Object Type": "PendingServiceRouting"
    },
    {
      "Key Prefix": "0JS",
      "Object Type": "JigsawSavedSearch"
    },
    {
      "Key Prefix": "0JT",
      "Object Type": "JobTracker"
    },
    {
      "Key Prefix": "0JU",
      "Object Type": "UserListViewCriterion"
    },
    {
      "Key Prefix": "0JV",
      "Object Type": "PlatformAction"
    },
    {
      "Key Prefix": "0JW",
      "Object Type": "SetupNode"
    },
    {
      "Key Prefix": "0JX",
      "Object Type": "SurveyDefaultConfig"
    },
    {
      "Key Prefix": "0JY",
      "Object Type": "MacroAction"
    },
    {
      "Key Prefix": "0JZ",
      "Object Type": "Macro"
    },
    {
      "Key Prefix": "0Ja",
      "Object Type": "ReadOnlyOauthToken"
    },
    {
      "Key Prefix": "0Jb",
      "Object Type": "ReadOnlyOauthTokenScope"
    },
    {
      "Key Prefix": "0Jc",
      "Object Type": "ForecastingShare"
    },
    {
      "Key Prefix": "0Jd",
      "Object Type": "ForecastingCategoryMapping"
    },
    {
      "Key Prefix": "0Je",
      "Object Type": "UserProvisioningConfig"
    },
    {
      "Key Prefix": "0Jf",
      "Object Type": "DomainSite"
    },
    {
      "Key Prefix": "0Jg",
      "Object Type": "ForecastingTypeToCategory"
    },
    {
      "Key Prefix": "0Ji",
      "Object Type": "MacroInstruction"
    },
    {
      "Key Prefix": "0Jj",
      "Object Type": "CopySuspension"
    },
    {
      "Key Prefix": "0Jk",
      "Object Type": "ReadOnlySecurityToken"
    },
    {
      "Key Prefix": "0Jl",
      "Object Type": "ReadOnlyLoginIp"
    },
    {
      "Key Prefix": "0Jm",
      "Object Type": "ReadOnlyLoginIpEmail"
    },
    {
      "Key Prefix": "0Jn",
      "Object Type": "PlatformActionList"
    },
    {
      "Key Prefix": "0Jo",
      "Object Type": "PlatformActionListItem"
    },
    {
      "Key Prefix": "0Jp",
      "Object Type": "ReadOnlyClientBrowser"
    },
    {
      "Key Prefix": "0Jq",
      "Object Type": "SCSInboundSettings"
    },
    {
      "Key Prefix": "0Jr",
      "Object Type": "ThirdPartyAccountLink"
    },
    {
      "Key Prefix": "0Js",
      "Object Type": "SkinnyIndex"
    },
    {
      "Key Prefix": "0Jt",
      "Object Type": "SkinnyIndexColumn"
    },
    {
      "Key Prefix": "0Ju",
      "Object Type": "RelationshipInfo"
    },
    {
      "Key Prefix": "0Jv",
      "Object Type": "RelationshipDomain"
    },
    {
      "Key Prefix": "0Jx",
      "Object Type": "IdentityVerificationEvent"
    },
    {
      "Key Prefix": "0Jy",
      "Object Type": "StandardAction"
    },
    {
      "Key Prefix": "0Jz",
      "Object Type": "TodayGoal"
    },
    {
      "Key Prefix": "0K0",
      "Object Type": "ActionKnowledgeSubmit"
    },
    {
      "Key Prefix": "0K2",
      "Object Type": "ActionChatterPost"
    },
    {
      "Key Prefix": "0K3",
      "Object Type": "ActionChatterPostRecipient"
    },
    {
      "Key Prefix": "0K4",
      "Object Type": "SamplingStrategy"
    },
    {
      "Key Prefix": "0K6",
      "Object Type": "SampledEntity"
    },
    {
      "Key Prefix": "0K7",
      "Object Type": "StorageConfigAuditTrail"
    },
    {
      "Key Prefix": "0K9",
      "Object Type": "QueueRoutingConfig"
    },
    {
      "Key Prefix": "0KA",
      "Object Type": "UserConfigTransferSkill"
    },
    {
      "Key Prefix": "0KB",
      "Object Type": "UserConfigTransferButton"
    },
    {
      "Key Prefix": "0KD",
      "Object Type": "TabDefinition"
    },
    {
      "Key Prefix": "0KG",
      "Object Type": "SqlIdToRequestMap"
    },
    {
      "Key Prefix": "0KK",
      "Object Type": "CampaignInfluence"
    },
    {
      "Key Prefix": "0KM",
      "Object Type": "InstalledSubscriberPackageVersion"
    },
    {
      "Key Prefix": "0KO",
      "Object Type": "SecurityHealthCheckRisks"
    },
    {
      "Key Prefix": "0KP",
      "Object Type": "PresenceConfigDeclineReason"
    },
    {
      "Key Prefix": "0KR",
      "Object Type": "PresenceDeclineReason"
    },
    {
      "Key Prefix": "0KT",
      "Object Type": "EdgeMartMetadata"
    },
    {
      "Key Prefix": "0KU",
      "Object Type": "Measure"
    },
    {
      "Key Prefix": "0KV",
      "Object Type": "Dimension"
    },
    {
      "Key Prefix": "0KW",
      "Object Type": "RecordDisplayLookup"
    },
    {
      "Key Prefix": "0KX",
      "Object Type": "DimensionMember"
    },
    {
      "Key Prefix": "0KY",
      "Object Type": "StandardValueSet"
    },
    {
      "Key Prefix": "0KZ",
      "Object Type": "ReportInstanceQuery"
    },
    {
      "Key Prefix": "0Ka",
      "Object Type": "SurveyEmailBranding"
    },
    {
      "Key Prefix": "0Kb",
      "Object Type": "SyncTransactionLog"
    },
    {
      "Key Prefix": "0Kc",
      "Object Type": "SurveyQuestionChoice"
    },
    {
      "Key Prefix": "0Kd",
      "Object Type": "Survey"
    },
    {
      "Key Prefix": "0Ke",
      "Object Type": "SurveyPage"
    },
    {
      "Key Prefix": "0Kf",
      "Object Type": "WaveFeaturedAsset"
    },
    {
      "Key Prefix": "0Kg",
      "Object Type": "TwoFactorMethodsInfo"
    },
    {
      "Key Prefix": "0Kh",
      "Object Type": "FormulaFunctionCategory"
    },
    {
      "Key Prefix": "0Ki",
      "Object Type": "SurveyInvitation"
    },
    {
      "Key Prefix": "0Km",
      "Object Type": "CustomAppMetrics"
    },
    {
      "Key Prefix": "0Kn",
      "Object Type": "FormulaFunction"
    },
    {
      "Key Prefix": "0Ko",
      "Object Type": "GlobalVariable"
    },
    {
      "Key Prefix": "0Kp",
      "Object Type": "TwoFactorMethodsInfoLocal"
    },
    {
      "Key Prefix": "0Kq",
      "Object Type": "LoginFlow"
    },
    {
      "Key Prefix": "0Kr",
      "Object Type": "SurveyQuestionResponse"
    },
    {
      "Key Prefix": "0Ks",
      "Object Type": "SurveyVersion"
    },
    {
      "Key Prefix": "0Kt",
      "Object Type": "AssociatedLocation"
    },
    {
      "Key Prefix": "0Ku",
      "Object Type": "SurveyQuestion"
    },
    {
      "Key Prefix": "0Kv",
      "Object Type": "SetupApp"
    },
    {
      "Key Prefix": "0Ky",
      "Object Type": "CspFrameAncestor"
    },
    {
      "Key Prefix": "0Kz",
      "Object Type": "ResourcePreference"
    },
    {
      "Key Prefix": "0L0",
      "Object Type": "XmdDimRecordDisplayLookup"
    },
    {
      "Key Prefix": "0L1",
      "Object Type": "VoiceVendorInfo"
    },
    {
      "Key Prefix": "0L2",
      "Object Type": "TenantPlatformLicense"
    },
    {
      "Key Prefix": "0L3",
      "Object Type": "TenantUserLicense"
    },
    {
      "Key Prefix": "0L4",
      "Object Type": "TenantEditionLicense"
    },
    {
      "Key Prefix": "0L5",
      "Object Type": "TenantAddOnLicense"
    },
    {
      "Key Prefix": "0LC",
      "Object Type": "TenantLicensingRequest"
    },
    {
      "Key Prefix": "0LD",
      "Object Type": "RecalcCampaignStats"
    },
    {
      "Key Prefix": "0LE",
      "Object Type": "SamlSsoConfig"
    },
    {
      "Key Prefix": "0LG",
      "Object Type": "ReportInstance"
    },
    {
      "Key Prefix": "0LH",
      "Object Type": "SocialKeyJobLog"
    },
    {
      "Key Prefix": "0LI",
      "Object Type": "SocialKeyEntityErrorLog"
    },
    {
      "Key Prefix": "0LJ",
      "Object Type": "ModerationRule"
    },
    {
      "Key Prefix": "0LM",
      "Object Type": "KeywordList"
    },
    {
      "Key Prefix": "0LN",
      "Object Type": "StorageSizeJob"
    },
    {
      "Key Prefix": "0LO",
      "Object Type": "SetupAssistantAnswer"
    },
    {
      "Key Prefix": "0LP",
      "Object Type": "WaveReplicationFilterItem"
    },
    {
      "Key Prefix": "0LQ",
      "Object Type": "VoiceCall"
    },
    {
      "Key Prefix": "0LR",
      "Object Type": "WaveTrendedReport"
    },
    {
      "Key Prefix": "0LT",
      "Object Type": "DimensionSalesforceAction"
    },
    {
      "Key Prefix": "0LV",
      "Object Type": "UserCriteria"
    },
    {
      "Key Prefix": "0LY",
      "Object Type": "WaveAnnotationTarget"
    },
    {
      "Key Prefix": "0LZ",
      "Object Type": "WaveAnnotation"
    },
    {
      "Key Prefix": "0La",
      "Object Type": "DateMetadata"
    },
    {
      "Key Prefix": "0Lb",
      "Object Type": "EdgeMartOrganization"
    },
    {
      "Key Prefix": "0Lc",
      "Object Type": "LicensedCustomPermission"
    },
    {
      "Key Prefix": "0Ld",
      "Object Type": "LicenseDefinition"
    },
    {
      "Key Prefix": "0Le",
      "Object Type": "ExternalServiceRegistration"
    },
    {
      "Key Prefix": "0Lf",
      "Object Type": "UserFeedChannel"
    },
    {
      "Key Prefix": "0Lg",
      "Object Type": "UserSetupAppInfo"
    },
    {
      "Key Prefix": "0Lh",
      "Object Type": "ReleasedApexIdentifier"
    },
    {
      "Key Prefix": "0Li",
      "Object Type": "AssetTokenEvent"
    },
    {
      "Key Prefix": "0Lj",
      "Object Type": "AnalyticActionConfiguration"
    },
    {
      "Key Prefix": "0Ll",
      "Object Type": "LoginEventStream"
    },
    {
      "Key Prefix": "0Lm",
      "Object Type": "NavigationLinkSet"
    },
    {
      "Key Prefix": "0Ln",
      "Object Type": "ReleasedApexIdentifierOption"
    },
    {
      "Key Prefix": "0Lo",
      "Object Type": "AutoActivityCaptureMetrics"
    },
    {
      "Key Prefix": "0Lq",
      "Object Type": "EmbeddedServiceDetail"
    },
    {
      "Key Prefix": "0Ls",
      "Object Type": "AvroSchema"
    },
    {
      "Key Prefix": "0Lu",
      "Object Type": "ProductTransfer"
    },
    {
      "Key Prefix": "0Lw",
      "Object Type": "BrandingSet"
    },
    {
      "Key Prefix": "0Lx",
      "Object Type": "AIModel"
    },
    {
      "Key Prefix": "0Ly",
      "Object Type": "BrandingSetProperty"
    },
    {
      "Key Prefix": "0Lz",
      "Object Type": "LearningLinkProgress"
    },
    {
      "Key Prefix": "0M0",
      "Object Type": "FlexiPage"
    },
    {
      "Key Prefix": "0M1",
      "Object Type": "SocialUserAuth"
    },
    {
      "Key Prefix": "0M2",
      "Object Type": "FlexiPageRegion"
    },
    {
      "Key Prefix": "0M3",
      "Object Type": "SocialKeyParentRecord"
    },
    {
      "Key Prefix": "0M4",
      "Object Type": "SocialKeyPersonaRecord"
    },
    {
      "Key Prefix": "0M5",
      "Object Type": "Territory2Type"
    },
    {
      "Key Prefix": "0M6",
      "Object Type": "StreamingChannel"
    },
    {
      "Key Prefix": "0M9",
      "Object Type": "SandboxObserver"
    },
    {
      "Key Prefix": "0MA",
      "Object Type": "Territory2Model"
    },
    {
      "Key Prefix": "0MD",
      "Object Type": "SearchPromotionRule"
    },
    {
      "Key Prefix": "0ME",
      "Object Type": "SessionLevelPolicy"
    },
    {
      "Key Prefix": "0MF",
      "Object Type": "SynonymDictionary"
    },
    {
      "Key Prefix": "0MH",
      "Object Type": "TransitionMessage"
    },
    {
      "Key Prefix": "0MI",
      "Object Type": "Territory2"
    },
    {
      "Key Prefix": "0MJ",
      "Object Type": "SystemStreamingChannel"
    },
    {
      "Key Prefix": "0MK",
      "Object Type": "XCleanMatchRateMetrics"
    },
    {
      "Key Prefix": "0ML",
      "Object Type": "CustomNotificationType"
    },
    {
      "Key Prefix": "0MM",
      "Object Type": "WaveNotificationConfig"
    },
    {
      "Key Prefix": "0MN",
      "Object Type": "LayoutSectionState"
    },
    {
      "Key Prefix": "0MO",
      "Object Type": "AppNotifTypeOrgSetting"
    },
    {
      "Key Prefix": "0MP",
      "Object Type": "WaveTemplateDetails"
    },
    {
      "Key Prefix": "0MQ",
      "Object Type": "UserCustomBadge"
    },
    {
      "Key Prefix": "0MR",
      "Object Type": "MetricsDataFile"
    },
    {
      "Key Prefix": "0MT",
      "Object Type": "ContentOrgMetrics"
    },
    {
      "Key Prefix": "0MU",
      "Object Type": "ReleasedEntityState"
    },
    {
      "Key Prefix": "0MV",
      "Object Type": "UserFavorite"
    },
    {
      "Key Prefix": "0MW",
      "Object Type": "BuffaloOrgEstimate"
    },
    {
      "Key Prefix": "0MY",
      "Object Type": "ChatterExtension"
    },
    {
      "Key Prefix": "0MZ",
      "Object Type": "SourceMember"
    },
    {
      "Key Prefix": "0Ma",
      "Object Type": "SandboxObserver2"
    },
    {
      "Key Prefix": "0Mb",
      "Object Type": "ChatterExtensionInstance"
    },
    {
      "Key Prefix": "0Me",
      "Object Type": "OrchestrationContext"
    },
    {
      "Key Prefix": "0Mf",
      "Object Type": "FieldServiceMobileSettings"
    },
    {
      "Key Prefix": "0Mg",
      "Object Type": "AppExtension"
    },
    {
      "Key Prefix": "0Mh",
      "Object Type": "ConsumptionSchedule"
    },
    {
      "Key Prefix": "0Mi",
      "Object Type": "NavigationMenuItem"
    },
    {
      "Key Prefix": "0Mj",
      "Object Type": "MessagingChannel"
    },
    {
      "Key Prefix": "0Mk",
      "Object Type": "WindowsPushApplicationSetup"
    },
    {
      "Key Prefix": "0Mm",
      "Object Type": "MessagingLink"
    },
    {
      "Key Prefix": "0Mn",
      "Object Type": "OrchestrationContextEvent"
    },
    {
      "Key Prefix": "0Mo",
      "Object Type": "ConsumptionRate"
    },
    {
      "Key Prefix": "0Mp",
      "Object Type": "FeedEntityRead"
    },
    {
      "Key Prefix": "0Mq",
      "Object Type": "ProductConsumptionSchedule"
    },
    {
      "Key Prefix": "0Ms",
      "Object Type": "FeedRead"
    },
    {
      "Key Prefix": "0Mt",
      "Object Type": "BuffaloMigrationEvent"
    },
    {
      "Key Prefix": "0Mu",
      "Object Type": "BuffaloMigrationManagement"
    },
    {
      "Key Prefix": "0Mw",
      "Object Type": "MessagingSession"
    },
    {
      "Key Prefix": "0My",
      "Object Type": "SurveyResponse"
    },
    {
      "Key Prefix": "0Mz",
      "Object Type": "DomainProvision"
    },
    {
      "Key Prefix": "0N0",
      "Object Type": "UserMembershipSharingRule"
    },
    {
      "Key Prefix": "0N1",
      "Object Type": "UserCriteriaSharingRule"
    },
    {
      "Key Prefix": "0N2",
      "Object Type": "UserShare"
    },
    {
      "Key Prefix": "0N3",
      "Object Type": "UserSharingRuleFilterItem"
    },
    {
      "Key Prefix": "0N4",
      "Object Type": "RuleTerritory2Association"
    },
    {
      "Key Prefix": "0N5",
      "Object Type": "ServicePresenceStatus"
    },
    {
      "Key Prefix": "0N9",
      "Object Type": "ServiceChannel"
    },
    {
      "Key Prefix": "0NB",
      "Object Type": "SecureAgent"
    },
    {
      "Key Prefix": "0NC",
      "Object Type": "ServiceChannelStatus"
    },
    {
      "Key Prefix": "0ND",
      "Object Type": "SecureAgentPlugin"
    },
    {
      "Key Prefix": "0NE",
      "Object Type": "SecureAgentPluginProperty"
    },
    {
      "Key Prefix": "0NF",
      "Object Type": "ReportCustomDetailField"
    },
    {
      "Key Prefix": "0NI",
      "Object Type": "TransactionSecurityPolicy"
    },
    {
      "Key Prefix": "0NK",
      "Object Type": "S2XAdminError"
    },
    {
      "Key Prefix": "0NL",
      "Object Type": "StandardReportType"
    },
    {
      "Key Prefix": "0NM",
      "Object Type": "SearchQuerySuggestion"
    },
    {
      "Key Prefix": "0NN",
      "Object Type": "PostArchivalDeletionRequest"
    },
    {
      "Key Prefix": "0NQ",
      "Object Type": "TransactionSecurityAction"
    },
    {
      "Key Prefix": "0NR",
      "Object Type": "TransactionSecurityActionEvent"
    },
    {
      "Key Prefix": "0NU",
      "Object Type": "ReputationLevel"
    },
    {
      "Key Prefix": "0NV",
      "Object Type": "ReputationPointsRule"
    },
    {
      "Key Prefix": "0NW",
      "Object Type": "SOSDeployment"
    },
    {
      "Key Prefix": "0NX",
      "Object Type": "SOSSession"
    },
    {
      "Key Prefix": "0NZ",
      "Object Type": "SOSSessionActivity"
    },
    {
      "Key Prefix": "0Na",
      "Object Type": "UserListView"
    },
    {
      "Key Prefix": "0Nb",
      "Object Type": "LinkState"
    },
    {
      "Key Prefix": "0Nc",
      "Object Type": "LinkStateData"
    },
    {
      "Key Prefix": "0Nd",
      "Object Type": "PresenceUserConfig"
    },
    {
      "Key Prefix": "0Ne",
      "Object Type": "PresenceUserConfigUser"
    },
    {
      "Key Prefix": "0Nf",
      "Object Type": "PresenceUserConfigProfile"
    },
    {
      "Key Prefix": "0Ng",
      "Object Type": "CleanInfo"
    },
    {
      "Key Prefix": "0Nh",
      "Object Type": "CleanActivityLog"
    },
    {
      "Key Prefix": "0Ni",
      "Object Type": "UserProvAccount"
    },
    {
      "Key Prefix": "0Nj",
      "Object Type": "CleanEntityError"
    },
    {
      "Key Prefix": "0Nk",
      "Object Type": "WaveTemplate"
    },
    {
      "Key Prefix": "0Nl",
      "Object Type": "WaveTemplateExternalData"
    },
    {
      "Key Prefix": "0Nm",
      "Object Type": "WaveTemplateValues"
    },
    {
      "Key Prefix": "0Nn",
      "Object Type": "Xmd"
    },
    {
      "Key Prefix": "0No",
      "Object Type": "LiveChatBlockingRule"
    },
    {
      "Key Prefix": "0Np",
      "Object Type": "XCleanBulkJob"
    },
    {
      "Key Prefix": "0Nq",
      "Object Type": "XmdMeasure"
    },
    {
      "Key Prefix": "0Nr",
      "Object Type": "XmdDimension"
    },
    {
      "Key Prefix": "0Ns",
      "Object Type": "XmdDimensionMember"
    },
    {
      "Key Prefix": "0Nt",
      "Object Type": "SharedPicklistDefinition"
    },
    {
      "Key Prefix": "0Nu",
      "Object Type": "XmdDate"
    },
    {
      "Key Prefix": "0Nv",
      "Object Type": "EntityParticle"
    },
    {
      "Key Prefix": "0Nw",
      "Object Type": "UserAppMenuCustomization"
    },
    {
      "Key Prefix": "0Nx",
      "Object Type": "XmdDimSalesforceAction"
    },
    {
      "Key Prefix": "0Ny",
      "Object Type": "XmdOrganization"
    },
    {
      "Key Prefix": "0O0",
      "Object Type": "XinstanceInfo"
    },
    {
      "Key Prefix": "0O1",
      "Object Type": "TwoFactorU2F"
    },
    {
      "Key Prefix": "0O4",
      "Object Type": "WaveExternalConnProperty"
    },
    {
      "Key Prefix": "0O5",
      "Object Type": "XmdDimensionCustomAction"
    },
    {
      "Key Prefix": "0O6",
      "Object Type": "FieldMappingField"
    },
    {
      "Key Prefix": "0O7",
      "Object Type": "FieldMappingRow"
    },
    {
      "Key Prefix": "0O8",
      "Object Type": "FieldMapping"
    },
    {
      "Key Prefix": "0OB",
      "Object Type": "Shipment"
    },
    {
      "Key Prefix": "0OC",
      "Object Type": "TransactionSecurityCondition"
    },
    {
      "Key Prefix": "0OD",
      "Object Type": "InteractionCountReport"
    },
    {
      "Key Prefix": "0OE",
      "Object Type": "SubscriberTabSetMember"
    },
    {
      "Key Prefix": "0OF",
      "Object Type": "FlexipageComponentMetrics"
    },
    {
      "Key Prefix": "0OG",
      "Object Type": "BaseEventInterface"
    },
    {
      "Key Prefix": "0OH",
      "Object Type": "OperatingHours"
    },
    {
      "Key Prefix": "0OI",
      "Object Type": "MatchingRuleJob"
    },
    {
      "Key Prefix": "0OK",
      "Object Type": "ReleasedApexClassRel"
    },
    {
      "Key Prefix": "0OL",
      "Object Type": "OrgLifecycleNotification"
    },
    {
      "Key Prefix": "0OO",
      "Object Type": "ProcessInstanceNode"
    },
    {
      "Key Prefix": "0OP",
      "Object Type": "VisualforceAccessMetrics"
    },
    {
      "Key Prefix": "0OV",
      "Object Type": "NetworkAffinity"
    },
    {
      "Key Prefix": "0OZ",
      "Object Type": "WaveCompatibilityCheckItem"
    },
    {
      "Key Prefix": "0Oa",
      "Object Type": "ComponentResponseCache"
    },
    {
      "Key Prefix": "0Ob",
      "Object Type": "ChatterExtensionConfig"
    },
    {
      "Key Prefix": "0Oe",
      "Object Type": "DashboardComponentColumn"
    },
    {
      "Key Prefix": "0Of",
      "Object Type": "DashboardComponentResult"
    },
    {
      "Key Prefix": "0Oi",
      "Object Type": "CaseSubjectParticle"
    },
    {
      "Key Prefix": "0Ol",
      "Object Type": "ReportEventStream"
    },
    {
      "Key Prefix": "0Om",
      "Object Type": "ScorecardMetric"
    },
    {
      "Key Prefix": "0Oq",
      "Object Type": "PendingChangeContainer"
    },
    {
      "Key Prefix": "0Or",
      "Object Type": "DatasetExportEvent"
    },
    {
      "Key Prefix": "0Ow",
      "Object Type": "ContactPointPhone"
    },
    {
      "Key Prefix": "0Ox",
      "Object Type": "VoiceCallRecording"
    },
    {
      "Key Prefix": "0P0",
      "Object Type": "FlowVariableAssignment"
    },
    {
      "Key Prefix": "0P1",
      "Object Type": "Certificate"
    },
    {
      "Key Prefix": "0P2",
      "Object Type": "CertificateIp"
    },
    {
      "Key Prefix": "0P5",
      "Object Type": "AacObjectSetting"
    },
    {
      "Key Prefix": "0P9",
      "Object Type": "CalendarSharing"
    },
    {
      "Key Prefix": "0PA",
      "Object Type": "MessagingEndUser"
    },
    {
      "Key Prefix": "0PB",
      "Object Type": "DuplicateJob"
    },
    {
      "Key Prefix": "0PC",
      "Object Type": "DuplicateJobMatchingRule"
    },
    {
      "Key Prefix": "0PD",
      "Object Type": "CustomPermissionDependency"
    },
    {
      "Key Prefix": "0PF",
      "Object Type": "ParallelJobItemData"
    },
    {
      "Key Prefix": "0PG",
      "Object Type": "PermissionSetGroup"
    },
    {
      "Key Prefix": "0PH",
      "Object Type": "LogoutEventStream"
    },
    {
      "Key Prefix": "0PK",
      "Object Type": "Individual"
    },
    {
      "Key Prefix": "0PL",
      "Object Type": "PermissionSetLicense"
    },
    {
      "Key Prefix": "12:00 PM",
      "Object Type": "PermissionSetGroupComponent"
    },
    {
      "Key Prefix": "0PO",
      "Object Type": "DuplicateJobDefinition"
    },
    {
      "Key Prefix": "0PP",
      "Object Type": "DuplicateJobMatchingRuleDefinition"
    },
    {
      "Key Prefix": "0PQ",
      "Object Type": "ProcessTimeQueue"
    },
    {
      "Key Prefix": "0PS",
      "Object Type": "PermissionSet"
    },
    {
      "Key Prefix": "0PX",
      "Object Type": "PushUpgradeExcludedOrg"
    },
    {
      "Key Prefix": "0PY",
      "Object Type": "EmbeddedServiceFieldService"
    },
    {
      "Key Prefix": "0PZ",
      "Object Type": "MetadataContainerMember"
    },
    {
      "Key Prefix": "0Pa",
      "Object Type": "PermissionSetAssignment"
    },
    {
      "Key Prefix": "0Pk",
      "Object Type": "ChannelProgram"
    },
    {
      "Key Prefix": "0Pl",
      "Object Type": "ChannelProgramLevel"
    },
    {
      "Key Prefix": "12:00 PM",
      "Object Type": "ChannelProgramMember"
    },
    {
      "Key Prefix": "0Pp",
      "Object Type": "EinsteinApplication"
    },
    {
      "Key Prefix": "0Pp",
      "Object Type": "AIApplication"
    },
    {
      "Key Prefix": "0Pq",
      "Object Type": "PredictionConfig"
    },
    {
      "Key Prefix": "0Pr",
      "Object Type": "PredictionField"
    },
    {
      "Key Prefix": "0Ps",
      "Object Type": "PushBackDefinition"
    },
    {
      "Key Prefix": "0Pt",
      "Object Type": "PackageVersionInstallRequestError"
    },
    {
      "Key Prefix": "0Pu",
      "Object Type": "PackageVersionUninstallRequestError"
    },
    {
      "Key Prefix": "0Pv",
      "Object Type": "BigObjectsRecordMetrics"
    },
    {
      "Key Prefix": "0Px",
      "Object Type": "DatasetExport"
    },
    {
      "Key Prefix": "0Py",
      "Object Type": "DatasetExportPart"
    },
    {
      "Key Prefix": "0Pz",
      "Object Type": "EventTypeDefinition"
    },
    {
      "Key Prefix": "0Q0",
      "Object Type": "Quote"
    },
    {
      "Key Prefix": "0Q1",
      "Object Type": "OutgoingEmail"
    },
    {
      "Key Prefix": "0Q3",
      "Object Type": "OutgoingEmailRelation"
    },
    {
      "Key Prefix": "0Q5",
      "Object Type": "UserMetrics"
    },
    {
      "Key Prefix": "0Q7",
      "Object Type": "DirectMessageMemberActivity"
    },
    {
      "Key Prefix": "0QD",
      "Object Type": "QuoteDocument"
    },
    {
      "Key Prefix": "0QH",
      "Object Type": "Form"
    },
    {
      "Key Prefix": "0QI",
      "Object Type": "ApiEventStream"
    },
    {
      "Key Prefix": "0QJ",
      "Object Type": "FeedSignal"
    },
    {
      "Key Prefix": "0QK",
      "Object Type": "PinnedEntity"
    },
    {
      "Key Prefix": "0QL",
      "Object Type": "QuoteLineItem"
    },
    {
      "Key Prefix": "0QM",
      "Object Type": "MutingPermissionSet"
    },
    {
      "Key Prefix": "0QO",
      "Object Type": "FTestGenInterface"
    },
    {
      "Key Prefix": "0QP",
      "Object Type": "FTestGenBodyInterface"
    },
    {
      "Key Prefix": "0QR",
      "Object Type": "QuoteTemplateRichTextData"
    },
    {
      "Key Prefix": "0QT",
      "Object Type": "MetadataContainerMemberWithSymbolTable"
    },
    {
      "Key Prefix": "0QU",
      "Object Type": "ShareInterface"
    },
    {
      "Key Prefix": "0QV",
      "Object Type": "MultiCurrency"
    },
    {
      "Key Prefix": "0QY",
      "Object Type": "MetadataContainerMemberWithBody"
    },
    {
      "Key Prefix": "0QZ",
      "Object Type": "Auditable"
    },
    {
      "Key Prefix": "0Qb",
      "Object Type": "EntityEventInterface"
    },
    {
      "Key Prefix": "0Qc",
      "Object Type": "ActionQuickCreate"
    },
    {
      "Key Prefix": "0Qd",
      "Object Type": "DataExportEventInterface"
    },
    {
      "Key Prefix": "0Qf",
      "Object Type": "FormSection"
    },
    {
      "Key Prefix": "0Qg",
      "Object Type": "TransactionSecurityEventInterface"
    },
    {
      "Key Prefix": "0Qh",
      "Object Type": "FormItem"
    },
    {
      "Key Prefix": "0Qi",
      "Object Type": "SoftDeletable"
    },
    {
      "Key Prefix": "0Qj",
      "Object Type": "RecordUserAccessInterface"
    },
    {
      "Key Prefix": "0Qk",
      "Object Type": "UserNavItem"
    },
    {
      "Key Prefix": "0Qm",
      "Object Type": "AIModelDefinition"
    },
    {
      "Key Prefix": "0Qn",
      "Object Type": "ScorecardAssociation"
    },
    {
      "Key Prefix": "0Qo",
      "Object Type": "ExternalCredential"
    },
    {
      "Key Prefix": "0Qp",
      "Object Type": "SandOmBulkExport"
    },
    {
      "Key Prefix": "0Qq",
      "Object Type": "AIFilter"
    },
    {
      "Key Prefix": "0Qt",
      "Object Type": "VerificationHistory"
    },
    {
      "Key Prefix": "0Qu",
      "Object Type": "ReportEvent"
    },
    {
      "Key Prefix": "0Qw",
      "Object Type": "AIFilterGroup"
    },
    {
      "Key Prefix": "0Qx",
      "Object Type": "AIFilterValue"
    },
    {
      "Key Prefix": "0Qy",
      "Object Type": "SecureAgentsCluster"
    },
    {
      "Key Prefix": "0Qz",
      "Object Type": "Nameable"
    },
    {
      "Key Prefix": "0R0",
      "Object Type": "UserTerritory2Association"
    },
    {
      "Key Prefix": "0R1",
      "Object Type": "UserServicePresence"
    },
    {
      "Key Prefix": "0R2",
      "Object Type": "UiPlugin"
    },
    {
      "Key Prefix": "0R8",
      "Object Type": "PartnerFundAllocation"
    },
    {
      "Key Prefix": "0RA",
      "Object Type": "ActivityRelation"
    },
    {
      "Key Prefix": "0RB",
      "Object Type": "PartnerFundClaim"
    },
    {
      "Key Prefix": "0RC",
      "Object Type": "CollaborationGroupRank"
    },
    {
      "Key Prefix": "0RD",
      "Object Type": "RecommendationDefinition"
    },
    {
      "Key Prefix": "0RE",
      "Object Type": "EventRelation"
    },
    {
      "Key Prefix": "0RH",
      "Object Type": "SandOmExportedBlob"
    },
    {
      "Key Prefix": "0RI",
      "Object Type": "LearningAssignment"
    },
    {
      "Key Prefix": "0RJ",
      "Object Type": "PartnerFundRequest"
    },
    {
      "Key Prefix": "0RL",
      "Object Type": "FlowCategory"
    },
    {
      "Key Prefix": "0RM",
      "Object Type": "BigObjectCounter"
    },
    {
      "Key Prefix": "0RT",
      "Object Type": "TaskRelation"
    },
    {
      "Key Prefix": "0RX",
      "Object Type": "LightningBolt"
    },
    {
      "Key Prefix": "0RY",
      "Object Type": "CustomSettingNameIndex"
    },
    {
      "Key Prefix": "0RZ",
      "Object Type": "PlinyPhysicalDeleteJob"
    },
    {
      "Key Prefix": "0Rb",
      "Object Type": "LightningComponentBundle"
    },
    {
      "Key Prefix": "0Rd",
      "Object Type": "LightningComponentResource"
    },
    {
      "Key Prefix": "0Rf",
      "Object Type": "LinkedInLeadGenToken"
    },
    {
      "Key Prefix": "0Rg",
      "Object Type": "InteractionLCMetrics"
    },
    {
      "Key Prefix": "0Rh",
      "Object Type": "TopicDataCategoryRule"
    },
    {
      "Key Prefix": "0Ri",
      "Object Type": "LinkedInLeadGenConfig"
    },
    {
      "Key Prefix": "0Rl",
      "Object Type": "FlowCategoryItem"
    },
    {
      "Key Prefix": "0Rm",
      "Object Type": "WaveAssetVersion"
    },
    {
      "Key Prefix": "0Rn",
      "Object Type": "EnhancedLetterhead"
    },
    {
      "Key Prefix": "0Rp",
      "Object Type": "LinkedInLeadGenAdAccount"
    },
    {
      "Key Prefix": "0Rr",
      "Object Type": "LightningBoltItem"
    },
    {
      "Key Prefix": "0Rs",
      "Object Type": "VisibilityChangeNotification"
    },
    {
      "Key Prefix": "0Rs",
      "Object Type": "VisibilityUpdateEvent"
    },
    {
      "Key Prefix": "0Rt",
      "Object Type": "FolderClosure"
    },
    {
      "Key Prefix": "0Ru",
      "Object Type": "LightningBoltImage"
    },
    {
      "Key Prefix": "0Rv",
      "Object Type": "LightningBoltFeature"
    },
    {
      "Key Prefix": "0Rw",
      "Object Type": "RecordAction"
    },
    {
      "Key Prefix": "0Rx",
      "Object Type": "PersonalizedUnswdQuestion"
    },
    {
      "Key Prefix": "0S1",
      "Object Type": "LightningExperienceTheme"
    },
    {
      "Key Prefix": "0S2",
      "Object Type": "S2XPushSubscription"
    },
    {
      "Key Prefix": "0S5",
      "Object Type": "OrchestrationEvent"
    },
    {
      "Key Prefix": "0S6",
      "Object Type": "OrchestrationEventField"
    },
    {
      "Key Prefix": "0SE",
      "Object Type": "ProfileSkillEndorsement"
    },
    {
      "Key Prefix": "0SK",
      "Object Type": "PurchaserPlanAssn"
    },
    {
      "Key Prefix": "0SL",
      "Object Type": "ServiceReportLayout"
    },
    {
      "Key Prefix": "0SM",
      "Object Type": "ProfileSkillUser"
    },
    {
      "Key Prefix": "0SO",
      "Object Type": "AuthProvider"
    },
    {
      "Key Prefix": "0SP",
      "Object Type": "SocialPersona"
    },
    {
      "Key Prefix": "0SR",
      "Object Type": "SignupRequest"
    },
    {
      "Key Prefix": "0ST",
      "Object Type": "SocialPost"
    },
    {
      "Key Prefix": "0SU",
      "Object Type": "AqtIncidentDetection"
    },
    {
      "Key Prefix": "0SV",
      "Object Type": "ReportInstanceCsvResult"
    },
    {
      "Key Prefix": "0SX",
      "Object Type": "RemoteTenantSecretSetting"
    },
    {
      "Key Prefix": "0Sa",
      "Object Type": "MetadataContainerMemberWithBinaryBody"
    },
    {
      "Key Prefix": "0Sb",
      "Object Type": "PurchaserPlan"
    },
    {
      "Key Prefix": "0Se",
      "Object Type": "AdminSetupEvent"
    },
    {
      "Key Prefix": "0Sf",
      "Object Type": "CoverageBenefitItem"
    },
    {
      "Key Prefix": "0Sg",
      "Object Type": "PlanBenefitItem"
    },
    {
      "Key Prefix": "0Si",
      "Object Type": "AIPredictionTarget"
    },
    {
      "Key Prefix": "0Sj",
      "Object Type": "AIManagedField"
    },
    {
      "Key Prefix": "0Sk",
      "Object Type": "ProfileSkill"
    },
    {
      "Key Prefix": "0Sl",
      "Object Type": "ProcessTypeDefinition"
    },
    {
      "Key Prefix": "0Sn",
      "Object Type": "ReturnOrderLineItem"
    },
    {
      "Key Prefix": "0So",
      "Object Type": "C2CPermissionBinding"
    },
    {
      "Key Prefix": "0Sq",
      "Object Type": "MemberPlan"
    },
    {
      "Key Prefix": "0Sr",
      "Object Type": "PersonEducation"
    },
    {
      "Key Prefix": "0Ss",
      "Object Type": "IdentityDocument"
    },
    {
      "Key Prefix": "0Su",
      "Object Type": "QmosEntityDefinition"
    },
    {
      "Key Prefix": "0Sy",
      "Object Type": "ActionOverrideMetrics"
    },
    {
      "Key Prefix": "0Sz",
      "Object Type": "QmosQueryStatus"
    },
    {
      "Key Prefix": "0T0",
      "Object Type": "SetupFlowProgress"
    },
    {
      "Key Prefix": "0T1",
      "Object Type": "ManagedContentType"
    },
    {
      "Key Prefix": "0T2",
      "Object Type": "AIInsightReason"
    },
    {
      "Key Prefix": "0T5",
      "Object Type": "IndividualShare"
    },
    {
      "Key Prefix": "0T6",
      "Object Type": "EmailDomainFilter"
    },
    {
      "Key Prefix": "0T7",
      "Object Type": "ManagedContentTypeVersion"
    },
    {
      "Key Prefix": "0T9",
      "Object Type": "OrchestrationContextDeploy"
    },
    {
      "Key Prefix": "0TA",
      "Object Type": "IndividualSharingRuleFilterItem"
    },
    {
      "Key Prefix": "0TB",
      "Object Type": "IndividualOwnerSharingRule"
    },
    {
      "Key Prefix": "0TC",
      "Object Type": "IndividualCriteriaSharingRule"
    },
    {
      "Key Prefix": "0TD",
      "Object Type": "MessagingTemplate"
    },
    {
      "Key Prefix": "0TG",
      "Object Type": "ManagedContentSpaceLink"
    },
    {
      "Key Prefix": "0TH",
      "Object Type": "ProdDbHammerRequest"
    },
    {
      "Key Prefix": "0TI",
      "Object Type": "TopicIndex"
    },
    {
      "Key Prefix": "0TJ",
      "Object Type": "EventTypeFieldDefinition"
    },
    {
      "Key Prefix": "0TK",
      "Object Type": "ManagedContentNodeType"
    },
    {
      "Key Prefix": "0TL",
      "Object Type": "CoverageBenefit"
    },
    {
      "Key Prefix": "0TM",
      "Object Type": "PlanBenefit"
    },
    {
      "Key Prefix": "0TN",
      "Object Type": "WaveAssetEvent"
    },
    {
      "Key Prefix": "0TO",
      "Object Type": "Topic"
    },
    {
      "Key Prefix": "0TR",
      "Object Type": "ProductItemTransaction"
    },
    {
      "Key Prefix": "0TS",
      "Object Type": "ProductRequest"
    },
    {
      "Key Prefix": "0TT",
      "Object Type": "TrialforceTemplate"
    },
    {
      "Key Prefix": "0TU",
      "Object Type": "AccountBrand"
    },
    {
      "Key Prefix": "0TW",
      "Object Type": "IsvHammerRequestId"
    },
    {
      "Key Prefix": "0TY",
      "Object Type": "TopicOntology"
    },
    {
      "Key Prefix": "0TZ",
      "Object Type": "OrchestrationContextDataset"
    },
    {
      "Key Prefix": "0Tc",
      "Object Type": "QmosQuery1"
    },
    {
      "Key Prefix": "0Td",
      "Object Type": "CarePreauth"
    },
    {
      "Key Prefix": "0Te",
      "Object Type": "QmosQueryCol1"
    },
    {
      "Key Prefix": "0Tg",
      "Object Type": "CarePreauthItem"
    },
    {
      "Key Prefix": "0Ti",
      "Object Type": "QmosMatCol1"
    },
    {
      "Key Prefix": "0Tj",
      "Object Type": "MetadataComponentDependency"
    },
    {
      "Key Prefix": "0Tp",
      "Object Type": "PermissionSetProfileMetrics"
    },
    {
      "Key Prefix": "0Ts",
      "Object Type": "ValidationRuleInfo"
    },
    {
      "Key Prefix": "0Tt",
      "Object Type": "TopicTerm"
    },
    {
      "Key Prefix": "0Tv",
      "Object Type": "BaseSessionInterface"
    },
    {
      "Key Prefix": "0Tw",
      "Object Type": "ProductRequestLineItem"
    },
    {
      "Key Prefix": "0Tz",
      "Object Type": "ContactRequest"
    },
    {
      "Key Prefix": "0U5",
      "Object Type": "LightningUsageByPageMetrics"
    },
    {
      "Key Prefix": "0U6",
      "Object Type": "QmosSelCol1"
    },
    {
      "Key Prefix": "0UG",
      "Object Type": "OnboardingMetrics"
    },
    {
      "Key Prefix": "0UJ",
      "Object Type": "FieldServiceOrgSettings"
    },
    {
      "Key Prefix": "0UM",
      "Object Type": "SsoUserMapping"
    },
    {
      "Key Prefix": "0UN",
      "Object Type": "EmbeddedServiceLayout"
    },
    {
      "Key Prefix": "0UO",
      "Object Type": "EmbeddedServiceLayoutRule"
    },
    {
      "Key Prefix": "0UR",
      "Object Type": "EmbeddedServiceCustomComponent"
    },
    {
      "Key Prefix": "0US",
      "Object Type": "BotSessionsMetrics"
    },
    {
      "Key Prefix": "0UT",
      "Object Type": "TenantUsageEntitlement"
    },
    {
      "Key Prefix": "0UV",
      "Object Type": "UserEmailPreferredPerson"
    },
    {
      "Key Prefix": "0UW",
      "Object Type": "UserVerificationMessageUse"
    },
    {
      "Key Prefix": "0UX",
      "Object Type": "ForgottenToken"
    },
    {
      "Key Prefix": "0UZ",
      "Object Type": "WaveAutoInstallRequest"
    },
    {
      "Key Prefix": "0Ua",
      "Object Type": "LbpmMetrics"
    },
    {
      "Key Prefix": "0Ub",
      "Object Type": "RecordActionHistory"
    },
    {
      "Key Prefix": "0Uc",
      "Object Type": "FlowExtensionParam"
    },
    {
      "Key Prefix": "0Ud",
      "Object Type": "ContentFolderDistribution"
    },
    {
      "Key Prefix": "0Ue",
      "Object Type": "VerificationMessageCreditMetrics"
    },
    {
      "Key Prefix": "0Uh",
      "Object Type": "MessagingConfiguration"
    },
    {
      "Key Prefix": "0Ui",
      "Object Type": "AIModelMetric"
    },
    {
      "Key Prefix": "0Uj",
      "Object Type": "NLPhrase"
    },
    {
      "Key Prefix": "0Uk",
      "Object Type": "AIModelFactor"
    },
    {
      "Key Prefix": "0Ul",
      "Object Type": "AIFactorComponent"
    },
    {
      "Key Prefix": "0Um",
      "Object Type": "CareRequest"
    },
    {
      "Key Prefix": "0Un",
      "Object Type": "NLQueryFragment"
    },
    {
      "Key Prefix": "0Uq",
      "Object Type": "FlowExtension"
    },
    {
      "Key Prefix": "0Us",
      "Object Type": "CareRequestConfiguration"
    },
    {
      "Key Prefix": "0Uu",
      "Object Type": "EmbeddedServiceLabel"
    },
    {
      "Key Prefix": "0Uv",
      "Object Type": "PardotTenant"
    },
    {
      "Key Prefix": "0Uw",
      "Object Type": "UriEvent"
    },
    {
      "Key Prefix": "0Ux",
      "Object Type": "UriEventStream"
    },
    {
      "Key Prefix": "0Uy",
      "Object Type": "BaseEventPackageInterface"
    },
    {
      "Key Prefix": "0Uz",
      "Object Type": "EngagementEvent"
    },
    {
      "Key Prefix": "0V2",
      "Object Type": "PlatformStatusAlertEvent"
    },
    {
      "Key Prefix": "0V8",
      "Object Type": "MessagingMetrics"
    },
    {
      "Key Prefix": "0V9",
      "Object Type": "LightningExitByPageMetrics"
    },
    {
      "Key Prefix": "0VA",
      "Object Type": "RemoteKeyCalloutEvent"
    },
    {
      "Key Prefix": "0VB",
      "Object Type": "UserActivityTimelineFilter"
    },
    {
      "Key Prefix": "0VC",
      "Object Type": "CareDiagnosis"
    },
    {
      "Key Prefix": "0VD",
      "Object Type": "CareRequestDrug"
    },
    {
      "Key Prefix": "0VF",
      "Object Type": "OrchestrationContextRuntimeEvent"
    },
    {
      "Key Prefix": "0VG",
      "Object Type": "LimitUsageTracker"
    },
    {
      "Key Prefix": "0VI",
      "Object Type": "BuffaloStep"
    },
    {
      "Key Prefix": "0VK",
      "Object Type": "CareRequestItem"
    },
    {
      "Key Prefix": "0VL",
      "Object Type": "ContactPointEntityAssocSnapshotLocator"
    },
    {
      "Key Prefix": "0VM",
      "Object Type": "EntityAssociationDefinitionVersion"
    },
    {
      "Key Prefix": "0VP",
      "Object Type": "WorkCapacityUsage"
    },
    {
      "Key Prefix": "0VQ",
      "Object Type": "WorkCapacityLimit"
    },
    {
      "Key Prefix": "0VR",
      "Object Type": "ServiceAppointmentCapacityUsage"
    },
    {
      "Key Prefix": "0VS",
      "Object Type": "WorkTypeGroup"
    },
    {
      "Key Prefix": "0VX",
      "Object Type": "LoginAsEvent"
    },
    {
      "Key Prefix": "0VY",
      "Object Type": "LoginAsEventStream"
    },
    {
      "Key Prefix": "0VZ",
      "Object Type": "InteractionUsageMetrics"
    },
    {
      "Key Prefix": "0Vi",
      "Object Type": "ContentDocumentListViewMapping"
    },
    {
      "Key Prefix": "0Vk",
      "Object Type": "SurveySubject"
    },
    {
      "Key Prefix": "0Vl",
      "Object Type": "Accreditation"
    },
    {
      "Key Prefix": "0Vo",
      "Object Type": "CareBarrier"
    },
    {
      "Key Prefix": "0Vp",
      "Object Type": "PlatformEventConduitMetrics"
    },
    {
      "Key Prefix": "0Vs",
      "Object Type": "CareBarrierType"
    },
    {
      "Key Prefix": "0Vv",
      "Object Type": "AIModelGraph"
    },
    {
      "Key Prefix": "0Vy",
      "Object Type": "MessagingAggregatedMetrics"
    },
    {
      "Key Prefix": "0Vz",
      "Object Type": "PlatformActionMetrics"
    },
    {
      "Key Prefix": "0W0",
      "Object Type": "WorkThanks"
    },
    {
      "Key Prefix": "0W1",
      "Object Type": "WorkBadgeDefinition"
    },
    {
      "Key Prefix": "0W2",
      "Object Type": "WorkBadge"
    },
    {
      "Key Prefix": "0W3",
      "Object Type": "WorkReward"
    },
    {
      "Key Prefix": "0W4",
      "Object Type": "WorkRewardFund"
    },
    {
      "Key Prefix": "0W5",
      "Object Type": "WorkAccess"
    },
    {
      "Key Prefix": "0W7",
      "Object Type": "WorkPerformanceCycle"
    },
    {
      "Key Prefix": "0W8",
      "Object Type": "WorkFeedbackQuestionSet"
    },
    {
      "Key Prefix": "0WA",
      "Object Type": "WorkFeedbackQuestion"
    },
    {
      "Key Prefix": "0WB",
      "Object Type": "WorkFeedback"
    },
    {
      "Key Prefix": "0WC",
      "Object Type": "WorkFeedbackRequest"
    },
    {
      "Key Prefix": "0WD",
      "Object Type": "WorkCoaching"
    },
    {
      "Key Prefix": "0WE",
      "Object Type": "WorkGoal"
    },
    {
      "Key Prefix": "0WF",
      "Object Type": "WorkGoalCollaborator"
    },
    {
      "Key Prefix": "0WG",
      "Object Type": "WorkGoalLink"
    },
    {
      "Key Prefix": "0WH",
      "Object Type": "WorkRewardFundType"
    },
    {
      "Key Prefix": "0WI",
      "Object Type": "Goal"
    },
    {
      "Key Prefix": "0WJ",
      "Object Type": "Metric"
    },
    {
      "Key Prefix": "0WK",
      "Object Type": "GoalLink"
    },
    {
      "Key Prefix": "0WL",
      "Object Type": "WorkFeedbackTemplate"
    },
    {
      "Key Prefix": "0WM",
      "Object Type": "MetricDataLink"
    },
    {
      "Key Prefix": "0WO",
      "Object Type": "WorkOrder"
    },
    {
      "Key Prefix": "0WQ",
      "Object Type": "NetworkLEAPlusDailyLoginMetrics"
    },
    {
      "Key Prefix": "0WR",
      "Object Type": "NetworkLEADailyLoginMetrics"
    },
    {
      "Key Prefix": "0Wa",
      "Object Type": "QmosMatEntityMeta"
    },
    {
      "Key Prefix": "0Wb",
      "Object Type": "QmosInColMap1"
    },
    {
      "Key Prefix": "0Wg",
      "Object Type": "RecordActionDeployment"
    },
    {
      "Key Prefix": "0Wh",
      "Object Type": "RecordActionSelectableItem"
    },
    {
      "Key Prefix": "0Wi",
      "Object Type": "RecordActionDefaultItem"
    },
    {
      "Key Prefix": "0Wv",
      "Object Type": "ManagedContentSpaceMember"
    },
    {
      "Key Prefix": "0Ww",
      "Object Type": "CareProgramEnrollee"
    },
    {
      "Key Prefix": "0Wx",
      "Object Type": "RecordActionDeploymentChannel"
    },
    {
      "Key Prefix": "0Wy",
      "Object Type": "B2BCommercePkgProductMetrics"
    },
    {
      "Key Prefix": "0Wz",
      "Object Type": "WorkTypeGroupMember"
    },
    {
      "Key Prefix": "0X0",
      "Object Type": "SalesforceIqSyncFailure"
    },
    {
      "Key Prefix": "0X1",
      "Object Type": "StreamEmail"
    },
    {
      "Key Prefix": "0X2",
      "Object Type": "StreamEvent"
    },
    {
      "Key Prefix": "0X5",
      "Object Type": "IntegrationAuditingEvent"
    },
    {
      "Key Prefix": "0X7",
      "Object Type": "FormsMetrics"
    },
    {
      "Key Prefix": "0X8",
      "Object Type": "ListViewEvent"
    },
    {
      "Key Prefix": "0XA",
      "Object Type": "NamedCredential"
    },
    {
      "Key Prefix": "0XB",
      "Object Type": "ListEmail"
    },
    {
      "Key Prefix": "0XC",
      "Object Type": "ExternalDataSource"
    },
    {
      "Key Prefix": "0XC",
      "Object Type": "ContentHubRepository"
    },
    {
      "Key Prefix": "0XD",
      "Object Type": "ListEmailRecipientSource"
    },
    {
      "Key Prefix": "0XE",
      "Object Type": "ListEmailSentResult"
    },
    {
      "Key Prefix": "0XF",
      "Object Type": "ListEmailIndividualRecipient"
    },
    {
      "Key Prefix": "0XG",
      "Object Type": "ListViewEventStream"
    },
    {
      "Key Prefix": "0XH",
      "Object Type": "CustomHttpHeader"
    },
    {
      "Key Prefix": "0XI",
      "Object Type": "AppAnalyticsQueryRequest"
    },
    {
      "Key Prefix": "0XK",
      "Object Type": "HealthCareProcedure"
    },
    {
      "Key Prefix": "0XN",
      "Object Type": "HealthCareDiagnosis"
    },
    {
      "Key Prefix": "0XR",
      "Object Type": "SalesforceIqUser"
    },
    {
      "Key Prefix": "0XS",
      "Object Type": "SalesforceIqDataSource"
    },
    {
      "Key Prefix": "0XT",
      "Object Type": "StreamActivityAccess"
    },
    {
      "Key Prefix": "0XU",
      "Object Type": "ExternalDataUserAuth"
    },
    {
      "Key Prefix": "0XY",
      "Object Type": "SiqUserBlacklist"
    },
    {
      "Key Prefix": "0Xc",
      "Object Type": "PaymentAuthorization"
    },
    {
      "Key Prefix": "0Xe",
      "Object Type": "B2BCommercePackageMetrics"
    },
    {
      "Key Prefix": "0Xj",
      "Object Type": "AddressableEventInterface"
    },
    {
      "Key Prefix": "0Xk",
      "Object Type": "ContentExternalStorage"
    },
    {
      "Key Prefix": "0Xl",
      "Object Type": "CommSubscription"
    },
    {
      "Key Prefix": "0Xs",
      "Object Type": "SiteIframeWhiteListUrl"
    },
    {
      "Key Prefix": "0Xt",
      "Object Type": "PaymentGatewayLog"
    },
    {
      "Key Prefix": "0Xv",
      "Object Type": "SourceChangeNotification"
    },
    {
      "Key Prefix": "0Xw",
      "Object Type": "AsyncOperationEvent"
    },
    {
      "Key Prefix": "0Xy",
      "Object Type": "AEJobTracker"
    },
    {
      "Key Prefix": "0Y7",
      "Object Type": "ReportFormattingRule"
    },
    {
      "Key Prefix": "0Y8",
      "Object Type": "ReportFormattingRuleValue"
    },
    {
      "Key Prefix": "0YD",
      "Object Type": "AsyncOperationStatus"
    },
    {
      "Key Prefix": "0YI",
      "Object Type": "ActivityEngagementRollup"
    },
    {
      "Key Prefix": "0YL",
      "Object Type": "PlatformEventChannel"
    },
    {
      "Key Prefix": "0YM",
      "Object Type": "CareInterventionType"
    },
    {
      "Key Prefix": "0YN",
      "Object Type": "NextBestActionUsageMetrics"
    },
    {
      "Key Prefix": "0YO",
      "Object Type": "CareDeterminantType"
    },
    {
      "Key Prefix": "0YS",
      "Object Type": "BoardCertification"
    },
    {
      "Key Prefix": "0YT",
      "Object Type": "InsurancePolicy"
    },
    {
      "Key Prefix": "0YW",
      "Object Type": "InsurancePolicyAsset"
    },
    {
      "Key Prefix": "0YY",
      "Object Type": "ExecutionPlanTask"
    },
    {
      "Key Prefix": "0YZ",
      "Object Type": "PrivacyConsentRow"
    },
    {
      "Key Prefix": "0Ya",
      "Object Type": "LoginHistory"
    },
    {
      "Key Prefix": "0Ym",
      "Object Type": "SetupAuditTrail"
    },
    {
      "Key Prefix": "0Yq",
      "Object Type": "RateLimitIntBuckets"
    },
    {
      "Key Prefix": "0Yr",
      "Object Type": "PersonLifeEvent"
    },
    {
      "Key Prefix": "0Ys",
      "Object Type": "ParallelJobStatus"
    },
    {
      "Key Prefix": "0Yu",
      "Object Type": "IdpEventLog"
    },
    {
      "Key Prefix": "0Yv",
      "Object Type": "ReportAnomalyEvent"
    },
    {
      "Key Prefix": "0Yw",
      "Object Type": "UserLogin"
    },
    {
      "Key Prefix": "0Yx",
      "Object Type": "Producer"
    },
    {
      "Key Prefix": "0Yy",
      "Object Type": "InsuranceProfile"
    },
    {
      "Key Prefix": "0Z2",
      "Object Type": "ASEMobileConfigUser"
    },
    {
      "Key Prefix": "0Z5",
      "Object Type": "Visit"
    },
    {
      "Key Prefix": "0Z7",
      "Object Type": "ReportAnomalyEventStore"
    },
    {
      "Key Prefix": "0ZA",
      "Object Type": "FileInspectionResult"
    },
    {
      "Key Prefix": "0ZB",
      "Object Type": "SharingUserCoverage"
    },
    {
      "Key Prefix": "0ZD",
      "Object Type": "SharingCoverageJob"
    },
    {
      "Key Prefix": "0ZE",
      "Object Type": "Webstore"
    },
    {
      "Key Prefix": "0ZQ",
      "Object Type": "SendEmailActionDefinition"
    },
    {
      "Key Prefix": "0ZT",
      "Object Type": "DataUseLegalBasis"
    },
    {
      "Key Prefix": "0ZU",
      "Object Type": "DoradoRequestEvent"
    },
    {
      "Key Prefix": "0ZW",
      "Object Type": "DataUsePurpose"
    },
    {
      "Key Prefix": "0ZX",
      "Object Type": "ContactPointConsent"
    },
    {
      "Key Prefix": "0ZY",
      "Object Type": "ContactPointTypeConsent"
    },
    {
      "Key Prefix": "0ZZ",
      "Object Type": "InvalidRecordEvent"
    },
    {
      "Key Prefix": "0Zb",
      "Object Type": "CareBarrierDeterminant"
    },
    {
      "Key Prefix": "0Zd",
      "Object Type": "DatasetFetch"
    },
    {
      "Key Prefix": "0Ze",
      "Object Type": "CareProgram"
    },
    {
      "Key Prefix": "0Zf",
      "Object Type": "OrchestrationRuntimeEventHv"
    },
    {
      "Key Prefix": "0Zg",
      "Object Type": "SurveyQuestionScore"
    },
    {
      "Key Prefix": "0Zh",
      "Object Type": "SessionHijackingEvent"
    },
    {
      "Key Prefix": "0Zj",
      "Object Type": "SessionHijackingEventStore"
    },
    {
      "Key Prefix": "0Zk",
      "Object Type": "Claim"
    },
    {
      "Key Prefix": "0Zm",
      "Object Type": "ConditionalFormattingPropertyPredicate"
    },
    {
      "Key Prefix": "0Zn",
      "Object Type": "ConditionalFormattingPropertyBin"
    },
    {
      "Key Prefix": "0Zo",
      "Object Type": "ConditionalFormattingProperty"
    },
    {
      "Key Prefix": "0Zq",
      "Object Type": "AnalyticNotificationTracker"
    },
    {
      "Key Prefix": "0Zr",
      "Object Type": "CareProgramTeamMember"
    },
    {
      "Key Prefix": "0Zs",
      "Object Type": "CareProgramCampaign"
    },
    {
      "Key Prefix": "0Zt",
      "Object Type": "DatasetDarkLaunch"
    },
    {
      "Key Prefix": "0Zu",
      "Object Type": "ManagedContentSpace"
    },
    {
      "Key Prefix": "0Zx",
      "Object Type": "ForecastingDisplayedFamily"
    },
    {
      "Key Prefix": "0Zy",
      "Object Type": "ConversationEntry"
    },
    {
      "Key Prefix": "0a0",
      "Object Type": "Shift"
    },
    {
      "Key Prefix": "0a2",
      "Object Type": "FlexipagePageTypeMetrics"
    },
    {
      "Key Prefix": "0a5",
      "Object Type": "TimeSheetTemplateAssignment"
    },
    {
      "Key Prefix": "0aB",
      "Object Type": "EventDestination"
    },
    {
      "Key Prefix": "0aC",
      "Object Type": "OrchestrationContextEventField"
    },
    {
      "Key Prefix": "0aD",
      "Object Type": "AuraDefinitionChange"
    },
    {
      "Key Prefix": "0aJ",
      "Object Type": "ManagedContentSpaceRole"
    },
    {
      "Key Prefix": "0aQ",
      "Object Type": "Payment"
    },
    {
      "Key Prefix": "0aS",
      "Object Type": "ClaimParticipant"
    },
    {
      "Key Prefix": "0aa",
      "Object Type": "PaymentMethod"
    },
    {
      "Key Prefix": "0ab",
      "Object Type": "AuraDefinitionBundleInfo"
    },
    {
      "Key Prefix": "0ad",
      "Object Type": "AuraDefinitionInfo"
    },
    {
      "Key Prefix": "0ae",
      "Object Type": "AIPredictionEvent"
    },
    {
      "Key Prefix": "0af",
      "Object Type": "AutoCreationRun"
    },
    {
      "Key Prefix": "0al",
      "Object Type": "CommSubscriptionTiming"
    },
    {
      "Key Prefix": "12:00 AM",
      "Object Type": "AudienceMembership"
    },
    {
      "Key Prefix": "0ao",
      "Object Type": "InsurancePolicyParticipant"
    },
    {
      "Key Prefix": "0ap",
      "Object Type": "ManagedContentChannel"
    },
    {
      "Key Prefix": "0aq",
      "Object Type": "ManagedContentSpaceItem"
    },
    {
      "Key Prefix": "0b0",
      "Object Type": "PaymentGateway"
    },
    {
      "Key Prefix": "0b1",
      "Object Type": "ComponentInstancePropertyListItem"
    },
    {
      "Key Prefix": "0b3",
      "Object Type": "DialerBasicFeatureMetrics"
    },
    {
      "Key Prefix": "0b8",
      "Object Type": "CustomerProperty"
    },
    {
      "Key Prefix": "0bF",
      "Object Type": "LearningAssignmentProgress"
    },
    {
      "Key Prefix": "0bJ",
      "Object Type": "ManagedContentTypeInfo"
    },
    {
      "Key Prefix": "0bK",
      "Object Type": "CareTaxonomy"
    },
    {
      "Key Prefix": "0bN",
      "Object Type": "HealthcareProviderNpi"
    },
    {
      "Key Prefix": "0bO",
      "Object Type": "HealthcareProviderSpecialty"
    },
    {
      "Key Prefix": "0bP",
      "Object Type": "HealthcareProviderTaxonomy"
    },
    {
      "Key Prefix": "0bQ",
      "Object Type": "RecordActionRecommendation"
    },
    {
      "Key Prefix": "0bR",
      "Object Type": "RecordActionDeploymentContext"
    },
    {
      "Key Prefix": "0bS",
      "Object Type": "HealthcarePractitionerFacility"
    },
    {
      "Key Prefix": "0bT",
      "Object Type": "DashboardComponentSort"
    },
    {
      "Key Prefix": "0bW",
      "Object Type": "InteractionVisibilityRule"
    },
    {
      "Key Prefix": "0bX",
      "Object Type": "CareProviderFacilitySpecialty"
    },
    {
      "Key Prefix": "0bY",
      "Object Type": "HealthcareFacilityNetwork"
    },
    {
      "Key Prefix": "0bZ",
      "Object Type": "LightningSchedulerUsageMetrics"
    },
    {
      "Key Prefix": "0bc",
      "Object Type": "CareSpecialty"
    },
    {
      "Key Prefix": "0bd",
      "Object Type": "CareProgramProduct"
    },
    {
      "Key Prefix": "0be",
      "Object Type": "CareProgramEnrolleeProduct"
    },
    {
      "Key Prefix": "0bf",
      "Object Type": "HealthcarePayerNetwork"
    },
    {
      "Key Prefix": "0bg",
      "Object Type": "CareProgramEnrollmentCard"
    },
    {
      "Key Prefix": "0bh",
      "Object Type": "LightningUriEvent"
    },
    {
      "Key Prefix": "0bi",
      "Object Type": "LightningUriEventStream"
    },
    {
      "Key Prefix": "0bk",
      "Object Type": "CareProgramEligibilityRule"
    },
    {
      "Key Prefix": "0bm",
      "Object Type": "EnrollmentEligibilityCriteria"
    },
    {
      "Key Prefix": "0bn",
      "Object Type": "CareProgramGoal"
    },
    {
      "Key Prefix": "0bo",
      "Object Type": "CareProgramProvider"
    },
    {
      "Key Prefix": "0br",
      "Object Type": "CareRequestExtension"
    },
    {
      "Key Prefix": "0bs",
      "Object Type": "Prompt"
    },
    {
      "Key Prefix": "0bt",
      "Object Type": "PromptVersion"
    },
    {
      "Key Prefix": "0bu",
      "Object Type": "PromptAction"
    },
    {
      "Key Prefix": "0bv",
      "Object Type": "AdminSetupEventStream"
    },
    {
      "Key Prefix": "0by",
      "Object Type": "FlexipageFieldInstance"
    },
    {
      "Key Prefix": "0bz",
      "Object Type": "DialerBasicAudioRecMetrics"
    },
    {
      "Key Prefix": "0c0",
      "Object Type": "CustomIndexDefinition"
    },
    {
      "Key Prefix": "0c1",
      "Object Type": "CustomIndexFieldDefinition"
    },
    {
      "Key Prefix": "0c6",
      "Object Type": "NetworkUserHistoryRecent"
    },
    {
      "Key Prefix": "0cC",
      "Object Type": "LoanApplicationFinancial"
    },
    {
      "Key Prefix": "0cE",
      "Object Type": "BusinessLicense"
    },
    {
      "Key Prefix": "0cF",
      "Object Type": "Award"
    },
    {
      "Key Prefix": "0cH",
      "Object Type": "CommerceIntegrationEvent"
    },
    {
      "Key Prefix": "0cI",
      "Object Type": "AuthorizationForm"
    },
    {
      "Key Prefix": "0cJ",
      "Object Type": "PaymentGatewayProvider"
    },
    {
      "Key Prefix": "0cK",
      "Object Type": "AuthorizationFormConsent"
    },
    {
      "Key Prefix": "0cM",
      "Object Type": "AuthorizationFormDataUse"
    },
    {
      "Key Prefix": "0cN",
      "Object Type": "AuthorizationFormText"
    },
    {
      "Key Prefix": "0cP",
      "Object Type": "LoanApplicationProperty"
    },
    {
      "Key Prefix": "0cQ",
      "Object Type": "CaseGatewayRequest"
    },
    {
      "Key Prefix": "0cS",
      "Object Type": "SurveyResponseUsageMetrics"
    },
    {
      "Key Prefix": "0cT",
      "Object Type": "LoanApplicationTitleHolder"
    },
    {
      "Key Prefix": "0cU",
      "Object Type": "LoanApplicant"
    },
    {
      "Key Prefix": "0cV",
      "Object Type": "LoanApplicantDeclaration"
    },
    {
      "Key Prefix": "0cW",
      "Object Type": "PortalDelegablePermissionSet"
    },
    {
      "Key Prefix": "0cY",
      "Object Type": "InsurancePolicyCoverage"
    },
    {
      "Key Prefix": "0ca",
      "Object Type": "ChatterActivity"
    },
    {
      "Key Prefix": "0cb",
      "Object Type": "Refund"
    },
    {
      "Key Prefix": "0cd",
      "Object Type": "ResidentialLoanApplication"
    },
    {
      "Key Prefix": "0ce",
      "Object Type": "CommerceIntegrationResponse"
    },
    {
      "Key Prefix": "0cf",
      "Object Type": "CareSystemFieldMapping"
    },
    {
      "Key Prefix": "0cg",
      "Object Type": "LoanApplicationAsset"
    },
    {
      "Key Prefix": "0ch",
      "Object Type": "LoanApplicationLiability"
    },
    {
      "Key Prefix": "0ci",
      "Object Type": "LoanApplicantIncome"
    },
    {
      "Key Prefix": "0cj",
      "Object Type": "LoanApplicantAddress"
    },
    {
      "Key Prefix": "0ck",
      "Object Type": "LoanApplicantEmployment"
    },
    {
      "Key Prefix": "0cl",
      "Object Type": "ProcessCartPricingEvent"
    },
    {
      "Key Prefix": "0cm",
      "Object Type": "HealthcareProvider"
    },
    {
      "Key Prefix": "0cn",
      "Object Type": "CartPricingResponseEvent"
    },
    {
      "Key Prefix": "0cs",
      "Object Type": "OauthConsumerScope"
    },
    {
      "Key Prefix": "0cu",
      "Object Type": "ManagedContentSpaceLanguage"
    },
    {
      "Key Prefix": "0cv",
      "Object Type": "FlowExecutionEventMetric"
    },
    {
      "Key Prefix": "0cw",
      "Object Type": "ManagedContentVersionLanguage"
    },
    {
      "Key Prefix": "0cx",
      "Object Type": "StrategyContext"
    },
    {
      "Key Prefix": "0d0",
      "Object Type": "CareProviderSearchableField"
    },
    {
      "Key Prefix": "0d4",
      "Object Type": "SharingOrgDefaultMetrics"
    },
    {
      "Key Prefix": "0d8",
      "Object Type": "B2BCommercePkgOrdersUE"
    },
    {
      "Key Prefix": "0dN",
      "Object Type": "CallDisposition"
    },
    {
      "Key Prefix": "0dO",
      "Object Type": "CallDispositionCategory"
    },
    {
      "Key Prefix": "0dR",
      "Object Type": "RefundLinePayment"
    },
    {
      "Key Prefix": "0dU",
      "Object Type": "LensDeveloper"
    },
    {
      "Key Prefix": "0dY",
      "Object Type": "CommSubscriptionConsent"
    },
    {
      "Key Prefix": "0dd",
      "Object Type": "DocumentChecklistItem"
    },
    {
      "Key Prefix": "0dh",
      "Object Type": "WorkerCompCoverageClass"
    },
    {
      "Key Prefix": "0dk",
      "Object Type": "AIPredictionExpression"
    },
    {
      "Key Prefix": "0dn",
      "Object Type": "RecordMergeHistory"
    },
    {
      "Key Prefix": "0do",
      "Object Type": "BusinessMilestone"
    },
    {
      "Key Prefix": "0dq",
      "Object Type": "ClaimItem"
    },
    {
      "Key Prefix": "0dr",
      "Object Type": "OrgDeleteRequest"
    },
    {
      "Key Prefix": "0du",
      "Object Type": "DelegatedAccount"
    },
    {
      "Key Prefix": "0dz",
      "Object Type": "PlatformEventEnrichmentField"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "ConsentEvent"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "ProfileClientSettings"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "LoanApplicantAsset"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "FlowExtensionGenericType"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "SharingOrgStandardMetrics"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "OutboundNetworkConnection"
    },
    {
      "Key Prefix": "0.00E+00",
      "Object Type": "OutboundNetworkConnProperty"
    },
    {
      "Key Prefix": "0eA",
      "Object Type": "FlowExtensionProcessType"
    },
    {
      "Key Prefix": "0eB",
      "Object Type": "CommSubscriptionChannelType"
    },
    {
      "Key Prefix": "0eC",
      "Object Type": "FlowExecutionErrorEvent"
    },
    {
      "Key Prefix": "0eF",
      "Object Type": "EngagementChannelType"
    },
    {
      "Key Prefix": "0eH",
      "Object Type": "EnhancedEmailTemplate"
    },
    {
      "Key Prefix": "0eK",
      "Object Type": "LoanApplicantLiability"
    },
    {
      "Key Prefix": "0eN",
      "Object Type": "DataflowNotification"
    },
    {
      "Key Prefix": "0eO",
      "Object Type": "AppleDomainVerification"
    },
    {
      "Key Prefix": "0eP",
      "Object Type": "ExecutionPlan"
    },
    {
      "Key Prefix": "0eQ",
      "Object Type": "BusinessProfile"
    },
    {
      "Key Prefix": "0eS",
      "Object Type": "InvoicePostedEvent"
    },
    {
      "Key Prefix": "0eT",
      "Object Type": "MobileEvent"
    },
    {
      "Key Prefix": "0eU",
      "Object Type": "AutoTriageMetrics"
    },
    {
      "Key Prefix": "0eX",
      "Object Type": "SecuritiesHolding"
    },
    {
      "Key Prefix": "0eb",
      "Object Type": "EntityBlacklist"
    },
    {
      "Key Prefix": "0el",
      "Object Type": "DocumentChecklistMetrics"
    },
    {
      "Key Prefix": "0en",
      "Object Type": "Endorsement"
    },
    {
      "Key Prefix": "0eo",
      "Object Type": "CommChannelLayout"
    },
    {
      "Key Prefix": "0ep",
      "Object Type": "CommChannelLayoutItem"
    },
    {
      "Key Prefix": "0eq",
      "Object Type": "CommChannelLayoutMapping"
    },
    {
      "Key Prefix": "0er",
      "Object Type": "SdbStmtIdToSqlIdMap"
    },
    {
      "Key Prefix": "0et",
      "Object Type": "CareProviderAdverseAction"
    },
    {
      "Key Prefix": "0ex",
      "Object Type": "CareProviderSearchConfig"
    },
    {
      "Key Prefix": "0f6",
      "Object Type": "FlowInterviewLogEntry"
    },
    {
      "Key Prefix": "0fE",
      "Object Type": "FormulaFunctionAllowedType"
    },
    {
      "Key Prefix": "0fL",
      "Object Type": "DataPrepServiceLocator"
    },
    {
      "Key Prefix": "0fP",
      "Object Type": "SourceObjectAttributes"
    },
    {
      "Key Prefix": "0fR",
      "Object Type": "FormulaVariable"
    },
    {
      "Key Prefix": "0fi",
      "Object Type": "CredentialStuffingEvent"
    },
    {
      "Key Prefix": "0fj",
      "Object Type": "CredentialStuffingEventStore"
    },
    {
      "Key Prefix": "0fr",
      "Object Type": "FeedRecommendationInfo"
    },
    {
      "Key Prefix": "0fu",
      "Object Type": "FlowTriggerTypeDefinition"
    },
    {
      "Key Prefix": "0fw",
      "Object Type": "LegalEntity"
    },
    {
      "Key Prefix": "0fy",
      "Object Type": "FlexipageInfo"
    },
    {
      "Key Prefix": "0g0",
      "Object Type": "InvocableActionGenericType"
    },
    {
      "Key Prefix": "0g2",
      "Object Type": "UserSetupEntityAccess"
    },
    {
      "Key Prefix": "0g3",
      "Object Type": "PageContentAssignment"
    },
    {
      "Key Prefix": "0g4",
      "Object Type": "MobileSecurityUserMetric"
    },
    {
      "Key Prefix": "0g8",
      "Object Type": "PartyConsent"
    },
    {
      "Key Prefix": "0gP",
      "Object Type": "AssetDowntimePeriod"
    },
    {
      "Key Prefix": "0gR",
      "Object Type": "RecoveryCopyJob"
    },
    {
      "Key Prefix": "0gS",
      "Object Type": "RecoveryFlashback"
    },
    {
      "Key Prefix": "0gU",
      "Object Type": "ManagedContentImportExportJob"
    },
    {
      "Key Prefix": "0ga",
      "Object Type": "MLDataDefinition"
    },
    {
      "Key Prefix": "0gi",
      "Object Type": "InboundNetworkConnection"
    },
    {
      "Key Prefix": "0gl",
      "Object Type": "ManagedContentRecordShare"
    },
    {
      "Key Prefix": "0gp",
      "Object Type": "InboundNetworkConnProperty"
    },
    {
      "Key Prefix": "0gv",
      "Object Type": "CaseArticle"
    },
    {
      "Key Prefix": "0hJ",
      "Object Type": "BulkApiResultEventStore"
    },
    {
      "Key Prefix": "0hK",
      "Object Type": "RecordsetFilterCriteriaRule"
    },
    {
      "Key Prefix": "0hY",
      "Object Type": "ThreatDetectionFeedback"
    },
    {
      "Key Prefix": "0hc",
      "Object Type": "HashtagCount"
    },
    {
      "Key Prefix": "0hd",
      "Object Type": "HashtagDefinition"
    },
    {
      "Key Prefix": "0hn",
      "Object Type": "CallCoachingMediaProvider"
    },
    {
      "Key Prefix": "0hr",
      "Object Type": "RecordsetFilterCriteria"
    },
    {
      "Key Prefix": "0ht",
      "Object Type": "Hashtag"
    },
    {
      "Key Prefix": "0hx",
      "Object Type": "BulkApiResultEvent"
    },
    {
      "Key Prefix": "0hy",
      "Object Type": "CallCoachConfigModifyEvent"
    },
    {
      "Key Prefix": "0iA",
      "Object Type": "SurveyVersionAddlInfo"
    },
    {
      "Key Prefix": "0iJ",
      "Object Type": "ShiftTemplate"
    },
    {
      "Key Prefix": "0iK",
      "Object Type": "SurveyEngagementContext"
    },
    {
      "Key Prefix": "0iR",
      "Object Type": "ProductServiceCampaign"
    },
    {
      "Key Prefix": "0in",
      "Object Type": "KnowledgeableUser"
    },
    {
      "Key Prefix": "0j5",
      "Object Type": "ApiAnomalyEvent"
    },
    {
      "Key Prefix": "0j6",
      "Object Type": "ApiAnomalyEventStore"
    },
    {
      "Key Prefix": "0j7",
      "Object Type": "AppUsageType"
    },
    {
      "Key Prefix": "0j8",
      "Object Type": "AppUsageAssignment"
    },
    {
      "Key Prefix": "0jd",
      "Object Type": "ManagedContentSpaceResource"
    },
    {
      "Key Prefix": "0jk",
      "Object Type": "ManagedContentDeployment"
    },
    {
      "Key Prefix": "0jl",
      "Object Type": "ManagedContentDeploymentItem"
    },
    {
      "Key Prefix": "0jp",
      "Object Type": "JobProfile"
    },
    {
      "Key Prefix": "0jv",
      "Object Type": "CdnDomain"
    },
    {
      "Key Prefix": "0jx",
      "Object Type": "InteractionScheduledPath"
    },
    {
      "Key Prefix": "0k8",
      "Object Type": "IdentityProviderEventStore"
    },
    {
      "Key Prefix": "0ka",
      "Object Type": "UserListPreference"
    },
    {
      "Key Prefix": "0kb",
      "Object Type": "ManagedContentExportJobItem"
    },
    {
      "Key Prefix": "0kt",
      "Object Type": "ApexTypeImplementor"
    },
    {
      "Key Prefix": "0mV",
      "Object Type": "SalesWorkQueueSettings"
    },
    {
      "Key Prefix": "0mt",
      "Object Type": "ManagedTopicLocation"
    },
    {
      "Key Prefix": "0n3",
      "Object Type": "FinanceTransaction"
    },
    {
      "Key Prefix": "0nU",
      "Object Type": "InteractionStageStepAssignee"
    },
    {
      "Key Prefix": "0ns",
      "Object Type": "ProcessNodeSecurity"
    },
    {
      "Key Prefix": "0ob",
      "Object Type": "ShipmentItem"
    },
    {
      "Key Prefix": "0pr",
      "Object Type": "Recommendation"
    },
    {
      "Key Prefix": "0ps",
      "Object Type": "RecommendationReaction"
    },
    {
      "Key Prefix": "0rB",
      "Object Type": "ReportResultBlob"
    },
    {
      "Key Prefix": "0ri",
      "Object Type": "InteractionStageItemParam"
    },
    {
      "Key Prefix": "0rp",
      "Object Type": "RemoteProxy"
    },
    {
      "Key Prefix": "0rs",
      "Object Type": "ChatterAnswersReputationLevel"
    },
    {
      "Key Prefix": "0sa",
      "Object Type": "ChatterAnswersActivity"
    },
    {
      "Key Prefix": "0sg",
      "Object Type": "RecommendationStrategy"
    },
    {
      "Key Prefix": "0sn",
      "Object Type": "RecommendationStrategyNode"
    },
    {
      "Key Prefix": "0sp",
      "Object Type": "ServiceProvider"
    },
    {
      "Key Prefix": "0sr",
      "Object Type": "ScheduledRecommendation"
    },
    {
      "Key Prefix": "0t0",
      "Object Type": "TagDefinition"
    },
    {
      "Key Prefix": "0tG",
      "Object Type": "TaskGroup"
    },
    {
      "Key Prefix": "0tR",
      "Object Type": "TopicRecordSetting"
    },
    {
      "Key Prefix": "0tS",
      "Object Type": "TopicSuggestionSetting"
    },
    {
      "Key Prefix": "0ta",
      "Object Type": "TopicComputeStatus"
    },
    {
      "Key Prefix": "0te",
      "Object Type": "TopicUserEvent"
    },
    {
      "Key Prefix": "0tg",
      "Object Type": "TopicGroupActivity"
    },
    {
      "Key Prefix": "0tn",
      "Object Type": "TopicNameChange"
    },
    {
      "Key Prefix": "0tr",
      "Object Type": "TrendingTopic"
    },
    {
      "Key Prefix": "0ts",
      "Object Type": "ProcessTransitionSecurity"
    },
    {
      "Key Prefix": "0tu",
      "Object Type": "TopicUserActivity"
    },
    {
      "Key Prefix": "0up",
      "Object Type": "UserPermissionAccess"
    },
    {
      "Key Prefix": "0ur",
      "Object Type": "UserRecSummary"
    },
    {
      "Key Prefix": "0v8",
      "Object Type": "PlatformEventChannelMember"
    },
    {
      "Key Prefix": "0wt",
      "Object Type": "ManagedContentSpacePermission"
    },
    {
      "Key Prefix": "0xt",
      "Object Type": "StrategyContextArgument"
    },
    {
      "Key Prefix": "0yp",
      "Object Type": "LearningContentItemProgress"
    },
    {
      "Key Prefix": "0zF",
      "Object Type": "DashboardSnapshotItem"
    },
    {
      "Key Prefix": "0zf",
      "Object Type": "DashboardSnapshotResults"
    },
    {
      "Key Prefix": "100",
      "Object Type": "UserLicense"
    },
    {
      "Key Prefix": "101",
      "Object Type": "ExternalString"
    },
    {
      "Key Prefix": "102",
      "Object Type": "FeatureLicense"
    },
    {
      "Key Prefix": "10y",
      "Object Type": "TaskRecurrenceException"
    },
    {
      "Key Prefix": "10z",
      "Object Type": "EventRecurrenceException"
    },
    {
      "Key Prefix": "110",
      "Object Type": "ObjectPermissions"
    },
    {
      "Key Prefix": "111",
      "Object Type": "EventComments"
    },
    {
      "Key Prefix": "112",
      "Object Type": "ProposedEventTime"
    },
    {
      "Key Prefix": "113",
      "Object Type": "ProposedEventResponse"
    },
    {
      "Key Prefix": "11a",
      "Object Type": "DBCThumbnail"
    },
    {
      "Key Prefix": "128",
      "Object Type": "LightningMessageField"
    },
    {
      "Key Prefix": "129",
      "Object Type": "LightningMessageChannel"
    },
    {
      "Key Prefix": "130",
      "Object Type": "Address"
    },
    {
      "Key Prefix": "131",
      "Object Type": "Location"
    },
    {
      "Key Prefix": "149",
      "Object Type": "OpportunitySplitType"
    },
    {
      "Key Prefix": "19i",
      "Object Type": "EmbeddedServiceBranding"
    },
    {
      "Key Prefix": "1AB",
      "Object Type": "CleanAccountBackup"
    },
    {
      "Key Prefix": "1AR",
      "Object Type": "AssetRelationship"
    },
    {
      "Key Prefix": "1CA",
      "Object Type": "AccountCleanInfo"
    },
    {
      "Key Prefix": "1CB",
      "Object Type": "CleanContactBackup"
    },
    {
      "Key Prefix": "1CC",
      "Object Type": "ContactCleanInfo"
    },
    {
      "Key Prefix": "1CF",
      "Object Type": "PathAssistantStepInfo"
    },
    {
      "Key Prefix": "1CL",
      "Object Type": "LeadCleanInfo"
    },
    {
      "Key Prefix": "1CP",
      "Object Type": "PathAssistant"
    },
    {
      "Key Prefix": "1CS",
      "Object Type": "PathAssistantStepItem"
    },
    {
      "Key Prefix": "1DS",
      "Object Type": "DigitalSignature"
    },
    {
      "Key Prefix": "1DW",
      "Object Type": "DigitalWallet"
    },
    {
      "Key Prefix": "1ED",
      "Object Type": "EncryptionStatistics"
    },
    {
      "Key Prefix": "1EF",
      "Object Type": "DataDotComFieldSetting"
    },
    {
      "Key Prefix": "1EH",
      "Object Type": "EncryptionFieldHistoryStatistics"
    },
    {
      "Key Prefix": "1EM",
      "Object Type": "EntityMilestone"
    },
    {
      "Key Prefix": "1EP",
      "Object Type": "EncryptableDataProblem"
    },
    {
      "Key Prefix": "1ES",
      "Object Type": "DataDotComEntitySetting"
    },
    {
      "Key Prefix": "1ET",
      "Object Type": "EncryptionFeedTrackingStatistics"
    },
    {
      "Key Prefix": "1EV",
      "Object Type": "EventType"
    },
    {
      "Key Prefix": "1Ep",
      "Object Type": "EventTypeParameter"
    },
    {
      "Key Prefix": "1FS",
      "Object Type": "CleanFieldSettingOld"
    },
    {
      "Key Prefix": "1GS",
      "Object Type": "ExpressionFilter"
    },
    {
      "Key Prefix": "1HA",
      "Object Type": "FieldHistoryArchive"
    },
    {
      "Key Prefix": "1HB",
      "Object Type": "LoginEvent"
    },
    {
      "Key Prefix": "1HC",
      "Object Type": "PlatformEventMetric"
    },
    {
      "Key Prefix": "1JS",
      "Object Type": "CleanJobSetting"
    },
    {
      "Key Prefix": "1L7",
      "Object Type": "ComparisonSummary"
    },
    {
      "Key Prefix": "1L8",
      "Object Type": "ComparisonResult"
    },
    {
      "Key Prefix": "1LB",
      "Object Type": "CleanLeadBackup"
    },
    {
      "Key Prefix": "1LT",
      "Object Type": "LimitsTracker"
    },
    {
      "Key Prefix": "1MA",
      "Object Type": "MaintenanceAsset"
    },
    {
      "Key Prefix": "1MC",
      "Object Type": "MetaMindConnection"
    },
    {
      "Key Prefix": "1MP",
      "Object Type": "MaintenancePlan"
    },
    {
      "Key Prefix": "1Mc",
      "Object Type": "PersonAccountMetrics"
    },
    {
      "Key Prefix": "1NR",
      "Object Type": "NamespaceRegistry"
    },
    {
      "Key Prefix": "1OO",
      "Object Type": "OutOfOffice"
    },
    {
      "Key Prefix": "1OZ",
      "Object Type": "CaseExternalDocument"
    },
    {
      "Key Prefix": "1PI",
      "Object Type": "PaymentIdempotent"
    },
    {
      "Key Prefix": "1PL",
      "Object Type": "PaymentLineInvoice"
    },
    {
      "Key Prefix": "1QQ",
      "Object Type": "BatchApexErrorEvent"
    },
    {
      "Key Prefix": "1QR",
      "Object Type": "ConcurLongRunApexErrEvent"
    },
    {
      "Key Prefix": "1RL",
      "Object Type": "ReleaseUpdateStepLog"
    },
    {
      "Key Prefix": "1RS",
      "Object Type": "ReleaseUpdateStep"
    },
    {
      "Key Prefix": "1RU",
      "Object Type": "ReleaseUpdate"
    },
    {
      "Key Prefix": "1S1",
      "Object Type": "MenuItem"
    },
    {
      "Key Prefix": "1SA",
      "Object Type": "StampAssignment"
    },
    {
      "Key Prefix": "1SR",
      "Object Type": "ServiceReport"
    },
    {
      "Key Prefix": "1ST",
      "Object Type": "Stamp"
    },
    {
      "Key Prefix": "1Sl",
      "Object Type": "ServiceTerritoryLocation"
    },
    {
      "Key Prefix": "1U7",
      "Object Type": "AppCapabilityConfig"
    },
    {
      "Key Prefix": "1U9",
      "Object Type": "LearningUserSummary"
    },
    {
      "Key Prefix": "1V4",
      "Object Type": "Expense"
    },
    {
      "Key Prefix": "1WK",
      "Object Type": "LinkedArticle"
    },
    {
      "Key Prefix": "1WL",
      "Object Type": "WorkOrderLineItem"
    },
    {
      "Key Prefix": "1XO",
      "Object Type": "ExternalServiceOperation"
    },
    {
      "Key Prefix": "1XP",
      "Object Type": "ExternalServiceParameter"
    },
    {
      "Key Prefix": "1Xl",
      "Object Type": "ExternalServiceListType"
    },
    {
      "Key Prefix": "1Xm",
      "Object Type": "ExternalServiceMapType"
    },
    {
      "Key Prefix": "1Xo",
      "Object Type": "ExternalServiceObjectType"
    },
    {
      "Key Prefix": "1Xp",
      "Object Type": "ExternalServiceProperty"
    },
    {
      "Key Prefix": "1Xt",
      "Object Type": "ExternalServiceDataType"
    },
    {
      "Key Prefix": "1Xx",
      "Object Type": "ExternalServiceSimpleType"
    },
    {
      "Key Prefix": "1YZ",
      "Object Type": "PrivacyConsent"
    },
    {
      "Key Prefix": "1ZE",
      "Object Type": "ComputedComponentMetadata"
    },
    {
      "Key Prefix": "1bm",
      "Object Type": "BranchMerge"
    },
    {
      "Key Prefix": "1br",
      "Object Type": "Branch"
    },
    {
      "Key Prefix": "1cN",
      "Object Type": "MessagingChannelSkill"
    },
    {
      "Key Prefix": "1cb",
      "Object Type": "ChangeListBranch"
    },
    {
      "Key Prefix": "1ci",
      "Object Type": "Integration"
    },
    {
      "Key Prefix": "1cl",
      "Object Type": "ChangeList"
    },
    {
      "Key Prefix": "1cm",
      "Object Type": "ServiceCrewMember"
    },
    {
      "Key Prefix": "1cr",
      "Object Type": "ServiceCrew"
    },
    {
      "Key Prefix": "1dc",
      "Object Type": "MetadataContainer"
    },
    {
      "Key Prefix": "1de",
      "Object Type": "IDEWorkspace"
    },
    {
      "Key Prefix": "1do",
      "Object Type": "ApexExecutionOverlayAction"
    },
    {
      "Key Prefix": "1dp",
      "Object Type": "IDEPerspective"
    },
    {
      "Key Prefix": "1dr",
      "Object Type": "ContainerAsyncRequest"
    },
    {
      "Key Prefix": "1gh",
      "Object Type": "GitHubRepositoryLink"
    },
    {
      "Key Prefix": "1gp",
      "Object Type": "GtwyProvPaymentMethodType"
    },
    {
      "Key Prefix": "1mr",
      "Object Type": "MetadataRevisionTemplate"
    },
    {
      "Key Prefix": "1o1",
      "Object Type": "LightningToggleMetrics"
    },
    {
      "Key Prefix": "1:00 PM",
      "Object Type": "PartitionLevelMember"
    },
    {
      "Key Prefix": "1ps",
      "Object Type": "PartitionLevelScheme"
    },
    {
      "Key Prefix": "1rX",
      "Object Type": "BriefcaseRule"
    },
    {
      "Key Prefix": "1rY",
      "Object Type": "BriefcaseDefinition"
    },
    {
      "Key Prefix": "1rZ",
      "Object Type": "BriefcaseRuleFilter"
    },
    {
      "Key Prefix": "1rp",
      "Object Type": "Repository"
    },
    {
      "Key Prefix": "1rr",
      "Object Type": "ResetAsyncRequest"
    },
    {
      "Key Prefix": "1s2",
      "Object Type": "InteractionCollectionProc"
    },
    {
      "Key Prefix": "1sa",
      "Object Type": "StagingArea"
    },
    {
      "Key Prefix": "1te",
      "Object Type": "TimeSheetEntry"
    },
    {
      "Key Prefix": "1ts",
      "Object Type": "TimeSheet"
    },
    {
      "Key Prefix": "1vc",
      "Object Type": "VersionedContentEntity"
    },
    {
      "Key Prefix": "1w1",
      "Object Type": "ShiftPattern"
    },
    {
      "Key Prefix": "1w2",
      "Object Type": "ShiftPatternEntry"
    },
    {
      "Key Prefix": "1w5",
      "Object Type": "AppleEcKey"
    },
    {
      "Key Prefix": "1w6",
      "Object Type": "LearningContentItem"
    },
    {
      "Key Prefix": "200",
      "Object Type": "ChunkableTask"
    },
    {
      "Key Prefix": "201",
      "Object Type": "ChunkableEntityTally"
    },
    {
      "Key Prefix": "202",
      "Object Type": "ChunkableEntityChunk"
    },
    {
      "Key Prefix": "203",
      "Object Type": "ChunkableEntityTally2"
    },
    {
      "Key Prefix": "204",
      "Object Type": "SfdcPartner"
    },
    {
      "Key Prefix": "205",
      "Object Type": "ChunkableEntityChunk2"
    },
    {
      "Key Prefix": "208",
      "Object Type": "SFDC_DIVISION"
    },
    {
      "Key Prefix": "20A",
      "Object Type": "DashboardCompColResult"
    },
    {
      "Key Prefix": "20X",
      "Object Type": "LocationTrustMeasure"
    },
    {
      "Key Prefix": "20Y",
      "Object Type": "ManagedContent"
    },
    {
      "Key Prefix": "20Z",
      "Object Type": "ManagedContentResource"
    },
    {
      "Key Prefix": "21Z",
      "Object Type": "LearningEarnedAward"
    },
    {
      "Key Prefix": "23N",
      "Object Type": "ProductServiceCampaignItem"
    },
    {
      "Key Prefix": "26Z",
      "Object Type": "EmailRelay"
    },
    {
      "Key Prefix": "2AS",
      "Object Type": "ActiveScratchOrg"
    },
    {
      "Key Prefix": "2BM",
      "Object Type": "DataflowTriggerSource"
    },
    {
      "Key Prefix": "2CE",
      "Object Type": "ChunkableTask2"
    },
    {
      "Key Prefix": "2Ca",
      "Object Type": "CustomHelpMenuItem"
    },
    {
      "Key Prefix": "2Cx",
      "Object Type": "CustomHelpMenuSection"
    },
    {
      "Key Prefix": "2ED",
      "Object Type": "EncryptionStatisticsChunk"
    },
    {
      "Key Prefix": "2EH",
      "Object Type": "EncryptionFieldHistoryStatisticsChunk"
    },
    {
      "Key Prefix": "2EP",
      "Object Type": "EncryptableDataProblemChunk"
    },
    {
      "Key Prefix": "2ET",
      "Object Type": "EncryptionFeedTrackingStatisticsChunk"
    },
    {
      "Key Prefix": "2FE",
      "Object Type": "CleanFactEntityClaim"
    },
    {
      "Key Prefix": "2FF",
      "Object Type": "CleanFactFieldClaim"
    },
    {
      "Key Prefix": "2LA",
      "Object Type": "PermissionSetLicenseAssign"
    },
    {
      "Key Prefix": "2Pd",
      "Object Type": "PermissionDependency"
    },
    {
      "Key Prefix": "2Pe",
      "Object Type": "ProcessException"
    },
    {
      "Key Prefix": "2SB",
      "Object Type": "ApiTaskResult"
    },
    {
      "Key Prefix": "2SR",
      "Object Type": "ScratchOrgInfo"
    },
    {
      "Key Prefix": "2ZC",
      "Object Type": "WaveSyncOut"
    },
    {
      "Key Prefix": "2ai",
      "Object Type": "AIMetric"
    },
    {
      "Key Prefix": "2hf",
      "Object Type": "PersonalizationResource"
    },
    {
      "Key Prefix": "2kA",
      "Object Type": "FinanceBalanceSnapshot"
    },
    {
      "Key Prefix": "2mn",
      "Object Type": "AIError"
    },
    {
      "Key Prefix": "2mp",
      "Object Type": "AIState"
    },
    {
      "Key Prefix": "2oN",
      "Object Type": "ReturnOrder"
    },
    {
      "Key Prefix": "2pc",
      "Object Type": "PackageConversion"
    },
    {
      "Key Prefix": "2wz",
      "Object Type": "TimeSheetTemplate"
    },
    {
      "Key Prefix": "300",
      "Object Type": "FlowDefinition"
    },
    {
      "Key Prefix": "301",
      "Object Type": "InteractionDefinitionVersion"
    },
    {
      "Key Prefix": "302",
      "Object Type": "FlowTestCoverage"
    },
    {
      "Key Prefix": "303",
      "Object Type": "FlowElementTestCoverage"
    },
    {
      "Key Prefix": "307",
      "Object Type": "InteractionScreenFieldParam"
    },
    {
      "Key Prefix": "308",
      "Object Type": "InteractionCondition"
    },
    {
      "Key Prefix": "309",
      "Object Type": "InteractionOperand"
    },
    {
      "Key Prefix": "30A",
      "Object Type": "InteractionAllocator"
    },
    {
      "Key Prefix": "30C",
      "Object Type": "InteractionChoice"
    },
    {
      "Key Prefix": "30D",
      "Object Type": "InteractionDecision"
    },
    {
      "Key Prefix": "30F",
      "Object Type": "InteractionForm"
    },
    {
      "Key Prefix": "30L",
      "Object Type": "InteractionConnector"
    },
    {
      "Key Prefix": "30Q",
      "Object Type": "InteractionQuestion"
    },
    {
      "Key Prefix": "30R",
      "Object Type": "InteractionReference"
    },
    {
      "Key Prefix": "30S",
      "Object Type": "InteractionStatement"
    },
    {
      "Key Prefix": "30T",
      "Object Type": "InteractionDynTypeMapping"
    },
    {
      "Key Prefix": "30V",
      "Object Type": "InteractionVariable"
    },
    {
      "Key Prefix": "30W",
      "Object Type": "InteractionWait"
    },
    {
      "Key Prefix": "30X",
      "Object Type": "ProcessPlugin"
    },
    {
      "Key Prefix": "30a",
      "Object Type": "InteractionAllocation"
    },
    {
      "Key Prefix": "30c",
      "Object Type": "InteractionConstant"
    },
    {
      "Key Prefix": "30d",
      "Object Type": "InteractionDataColumn"
    },
    {
      "Key Prefix": "30e",
      "Object Type": "InteractionWaitEvent"
    },
    {
      "Key Prefix": "30f",
      "Object Type": "InteractionFormula"
    },
    {
      "Key Prefix": "30g",
      "Object Type": "InteractionLayoutGroup"
    },
    {
      "Key Prefix": "30m",
      "Object Type": "InteractionApexCall"
    },
    {
      "Key Prefix": "30p",
      "Object Type": "InteractionWaitEventParam"
    },
    {
      "Key Prefix": "30r",
      "Object Type": "InteractionResource"
    },
    {
      "Key Prefix": "30t",
      "Object Type": "InteractionTodo"
    },
    {
      "Key Prefix": "30v",
      "Object Type": "InteractionValueList"
    },
    {
      "Key Prefix": "310",
      "Object Type": "InteractionLayoutDetail"
    },
    {
      "Key Prefix": "31A",
      "Object Type": "Subinteraction"
    },
    {
      "Key Prefix": "31C",
      "Object Type": "SubinteractionVariableAssignment"
    },
    {
      "Key Prefix": "31S",
      "Object Type": "InteractionSwitch"
    },
    {
      "Key Prefix": "31V",
      "Object Type": "InteractionFieldValue"
    },
    {
      "Key Prefix": "31c",
      "Object Type": "InteractionChoiceLookup"
    },
    {
      "Key Prefix": "31d",
      "Object Type": "InteractionDataSource"
    },
    {
      "Key Prefix": "31i",
      "Object Type": "InteractionDataInput"
    },
    {
      "Key Prefix": "31o",
      "Object Type": "InteractionDataOutput"
    },
    {
      "Key Prefix": "31v",
      "Object Type": "InteractionValueListEntry"
    },
    {
      "Key Prefix": "31w",
      "Object Type": "InteractionFieldMetaData"
    },
    {
      "Key Prefix": "31x",
      "Object Type": "InteractionStage"
    },
    {
      "Key Prefix": "31y",
      "Object Type": "FlowStageRelation"
    },
    {
      "Key Prefix": "31z",
      "Object Type": "FlowRecordRelation"
    },
    {
      "Key Prefix": "32A",
      "Object Type": "InteractionStart"
    },
    {
      "Key Prefix": "34L",
      "Object Type": "ManagedContentNode"
    },
    {
      "Key Prefix": "365",
      "Object Type": "FlowElementSubtype"
    },
    {
      "Key Prefix": "39d",
      "Object Type": "InvoiceUsageMetrics"
    },
    {
      "Key Prefix": "3:00 AM",
      "Object Type": "EmbeddedServiceAppointmentSettings"
    },
    {
      "Key Prefix": "3CL",
      "Object Type": "EmbeddedServiceCustomLabel"
    },
    {
      "Key Prefix": "3Ca",
      "Object Type": "ChannelAccountMetrics"
    },
    {
      "Key Prefix": "3DP",
      "Object Type": "EventDeliveryData"
    },
    {
      "Key Prefix": "3DS",
      "Object Type": "EventDelivery"
    },
    {
      "Key Prefix": "3Db",
      "Object Type": "EventDelivery"
    },
    {
      "Key Prefix": "3Df",
      "Object Type": "FlexipageFieldInstanceProperty"
    },
    {
      "Key Prefix": "3Dp",
      "Object Type": "EventDeliveryParam"
    },
    {
      "Key Prefix": "3Er",
      "Object Type": "EmbeddedServiceResource"
    },
    {
      "Key Prefix": "3FC",
      "Object Type": "EmbeddedServiceFlowConfig"
    },
    {
      "Key Prefix": "3FL",
      "Object Type": "EmbeddedServiceFlow"
    },
    {
      "Key Prefix": "3HP",
      "Object Type": "EventSubscriptionHandleData"
    },
    {
      "Key Prefix": "3J5",
      "Object Type": "ProfileIpRestrictionMetrics"
    },
    {
      "Key Prefix": "3JK",
      "Object Type": "PlatformEventSubscriberConfig"
    },
    {
      "Key Prefix": "3M0",
      "Object Type": "DataDotComCleanMetrics"
    },
    {
      "Key Prefix": "3M1",
      "Object Type": "OrgObjectsMetrics"
    },
    {
      "Key Prefix": "3M2",
      "Object Type": "OrgStandardObjectsMetrics"
    },
    {
      "Key Prefix": "3M3",
      "Object Type": "ChatterMetrics"
    },
    {
      "Key Prefix": "3M4",
      "Object Type": "ChatterOrgWideMetrics"
    },
    {
      "Key Prefix": "3M5",
      "Object Type": "NetworkCustomerLoginMetrics"
    },
    {
      "Key Prefix": "3M6",
      "Object Type": "NetworkPartnerLoginMetrics"
    },
    {
      "Key Prefix": "3MA",
      "Object Type": "PermissionSetMetricsByOrg"
    },
    {
      "Key Prefix": "3MB",
      "Object Type": "DataDotComSocialMetrics"
    },
    {
      "Key Prefix": "3MC",
      "Object Type": "OpportunityMetrics"
    },
    {
      "Key Prefix": "3MD",
      "Object Type": "ContentMetrics"
    },
    {
      "Key Prefix": "3ME",
      "Object Type": "CustomObjectUsageMetrics"
    },
    {
      "Key Prefix": "3MF",
      "Object Type": "SharingRowCauseMetrics"
    },
    {
      "Key Prefix": "3MG",
      "Object Type": "SharingMetrics"
    },
    {
      "Key Prefix": "3MH",
      "Object Type": "IdeaMetrics"
    },
    {
      "Key Prefix": "3MI",
      "Object Type": "UserDimMetrics"
    },
    {
      "Key Prefix": "3MJ",
      "Object Type": "PermissionSetLicenseMetrics"
    },
    {
      "Key Prefix": "3MK",
      "Object Type": "OpptyAndPricingMetrics"
    },
    {
      "Key Prefix": "3MM",
      "Object Type": "ChatterGroupConMetrics"
    },
    {
      "Key Prefix": "3MN",
      "Object Type": "ChatterUserNetworkMetrics"
    },
    {
      "Key Prefix": "3MO",
      "Object Type": "QuickActionMetrics"
    },
    {
      "Key Prefix": "3MP",
      "Object Type": "ForecastingTypeMetrics"
    },
    {
      "Key Prefix": "3MQ",
      "Object Type": "VisualforceMetrics"
    },
    {
      "Key Prefix": "3MR",
      "Object Type": "EventLogFileMetrics"
    },
    {
      "Key Prefix": "3MS",
      "Object Type": "DataDotComListPoolMetrics"
    },
    {
      "Key Prefix": "3MT",
      "Object Type": "ProcessMetrics"
    },
    {
      "Key Prefix": "3MU",
      "Object Type": "DeclarativePlatformMetrics"
    },
    {
      "Key Prefix": "3MV",
      "Object Type": "SharingUserMetrics"
    },
    {
      "Key Prefix": "3MW",
      "Object Type": "PlatformOrgObjectMetrics"
    },
    {
      "Key Prefix": "3Mi",
      "Object Type": "SharingPortalMetrics"
    },
    {
      "Key Prefix": "3Ml",
      "Object Type": "InteractionLanguageMetrics"
    },
    {
      "Key Prefix": "3Ms",
      "Object Type": "EmbeddedServiceMenuSettings"
    },
    {
      "Key Prefix": "3Mt",
      "Object Type": "InteractionTranslMetrics"
    },
    {
      "Key Prefix": "3N1",
      "Object Type": "ExtIdentityLoginMetrics"
    },
    {
      "Key Prefix": "3NA",
      "Object Type": "CustomObjectUserLicenseMetrics"
    },
    {
      "Key Prefix": "3NB",
      "Object Type": "LayoutDefinition"
    },
    {
      "Key Prefix": "3NC",
      "Object Type": "DialerMinutesMetrics"
    },
    {
      "Key Prefix": "3NO",
      "Object Type": "OpportunitySplitMetrics"
    },
    {
      "Key Prefix": "3NS",
      "Object Type": "SandboxOrgDimensionMetrics"
    },
    {
      "Key Prefix": "3NT",
      "Object Type": "SandboxDimensionMetrics"
    },
    {
      "Key Prefix": "3NU",
      "Object Type": "DataDotComCleanPrefMetrics"
    },
    {
      "Key Prefix": "3NV",
      "Object Type": "TwoFactorMetrics"
    },
    {
      "Key Prefix": "3NW",
      "Object Type": "NetworkPowerCustomerLoginMetrics"
    },
    {
      "Key Prefix": "3NX",
      "Object Type": "LightningComponentMetrics"
    },
    {
      "Key Prefix": "3NY",
      "Object Type": "ChatterUniqueContributorDailyMetrics"
    },
    {
      "Key Prefix": "3NZ",
      "Object Type": "ChatterActivityDailyMetrics"
    },
    {
      "Key Prefix": "3PP",
      "Object Type": "EventParameterData"
    },
    {
      "Key Prefix": "3PS",
      "Object Type": "EventParameter"
    },
    {
      "Key Prefix": "3PX",
      "Object Type": "ProcessPluginParameter"
    },
    {
      "Key Prefix": "3Pb",
      "Object Type": "EventPublication"
    },
    {
      "Key Prefix": "3Ph",
      "Object Type": "EventPublicationHandle"
    },
    {
      "Key Prefix": "3Pp",
      "Object Type": "EventPublicationParam"
    },
    {
      "Key Prefix": "3Ri",
      "Object Type": "LearningContentProgress"
    },
    {
      "Key Prefix": "3SP",
      "Object Type": "EventSubscriptionData"
    },
    {
      "Key Prefix": "3SR",
      "Object Type": "ShapeRepresentation"
    },
    {
      "Key Prefix": "3SS",
      "Object Type": "EventSubscription"
    },
    {
      "Key Prefix": "3U2",
      "Object Type": "ActionOverrideInfo"
    },
    {
      "Key Prefix": "3Ys",
      "Object Type": "SetupAssistantStep"
    },
    {
      "Key Prefix": "3ad",
      "Object Type": "FlowVariableView"
    },
    {
      "Key Prefix": "3cd",
      "Object Type": "FlowApexClassDescriptor"
    },
    {
      "Key Prefix": "3dd",
      "Object Type": "FlowDefinitionView"
    },
    {
      "Key Prefix": "3ec",
      "Object Type": "EmbeddedServiceCustomization"
    },
    {
      "Key Prefix": "3la",
      "Object Type": "AnalyticsLicensedAsset"
    },
    {
      "Key Prefix": "3mK",
      "Object Type": "LightningUsageByBrowserMetrics"
    },
    {
      "Key Prefix": "3mi",
      "Object Type": "EmbeddedServiceMenuItem"
    },
    {
      "Key Prefix": "3pc",
      "Object Type": "Product2CriteriaSharingRule"
    },
    {
      "Key Prefix": "3pd",
      "Object Type": "FlowApexClassPropertyDesc"
    },
    {
      "Key Prefix": "3pf",
      "Object Type": "Product2SharingRuleFilterItem"
    },
    {
      "Key Prefix": "3qb",
      "Object Type": "DmUser"
    },
    {
      "Key Prefix": "3qc",
      "Object Type": "DmPermissionSetAssignmentMetrics"
    },
    {
      "Key Prefix": "3qd",
      "Object Type": "DmPermissionSetMetrics"
    },
    {
      "Key Prefix": "3qe",
      "Object Type": "DmProfileMetric"
    },
    {
      "Key Prefix": "3qf",
      "Object Type": "DmUserCustomizationMetrics"
    },
    {
      "Key Prefix": "3qg",
      "Object Type": "DmUserLicenseMetrics"
    },
    {
      "Key Prefix": "3qh",
      "Object Type": "DmUserLoginMetrics"
    },
    {
      "Key Prefix": "3qi",
      "Object Type": "DmUserRoleMetrics"
    },
    {
      "Key Prefix": "3tt",
      "Object Type": "Invoice"
    },
    {
      "Key Prefix": "3uC",
      "Object Type": "ManagedContentNodeRendition"
    },
    {
      "Key Prefix": "3v1",
      "Object Type": "OrgMetric"
    },
    {
      "Key Prefix": "3vd",
      "Object Type": "FlowVersionView"
    },
    {
      "Key Prefix": "3zl",
      "Object Type": "ExpenseReportEntry"
    },
    {
      "Key Prefix": "400",
      "Object Type": "ApexClassMember"
    },
    {
      "Key Prefix": "401",
      "Object Type": "ApexTriggerMember"
    },
    {
      "Key Prefix": "402",
      "Object Type": "ApexPageMember"
    },
    {
      "Key Prefix": "403",
      "Object Type": "ApexComponentMember"
    },
    {
      "Key Prefix": "404",
      "Object Type": "WorkflowRuleMember"
    },
    {
      "Key Prefix": "405",
      "Object Type": "ValidationRuleMember"
    },
    {
      "Key Prefix": "406",
      "Object Type": "WorkflowFieldUpdateMember"
    },
    {
      "Key Prefix": "407",
      "Object Type": "WorkflowTaskMember"
    },
    {
      "Key Prefix": "408",
      "Object Type": "WorkflowAlertMember"
    },
    {
      "Key Prefix": "410",
      "Object Type": "WorkflowOutboundMessageMember"
    },
    {
      "Key Prefix": "412",
      "Object Type": "CustomFieldMember"
    },
    {
      "Key Prefix": "413",
      "Object Type": "ContentLogMetricsByFileType"
    },
    {
      "Key Prefix": "42C",
      "Object Type": "FlowSaveTrigger"
    },
    {
      "Key Prefix": "48D",
      "Object Type": "LearningAward"
    },
    {
      "Key Prefix": "4A0",
      "Object Type": "PendingChange"
    },
    {
      "Key Prefix": "4Dr",
      "Object Type": "PromptError"
    },
    {
      "Key Prefix": "4F0",
      "Object Type": "ApexClassVersion"
    },
    {
      "Key Prefix": "4F1",
      "Object Type": "ApexTriggerVersion"
    },
    {
      "Key Prefix": "4F2",
      "Object Type": "ApexPageVersion"
    },
    {
      "Key Prefix": "4F3",
      "Object Type": "ApexComponentVersion"
    },
    {
      "Key Prefix": "4F4",
      "Object Type": "CustomFieldVersion"
    },
    {
      "Key Prefix": "4F5",
      "Object Type": "EntityDefinitionVersion"
    },
    {
      "Key Prefix": "4M5",
      "Object Type": "NetworkCustomerDailyLoginMetrics"
    },
    {
      "Key Prefix": "4M6",
      "Object Type": "NetworkPartnerDailyLoginMetrics"
    },
    {
      "Key Prefix": "4NA",
      "Object Type": "CooperSettingsMetrics"
    },
    {
      "Key Prefix": "4NB",
      "Object Type": "SupportOrgWideMetrics"
    },
    {
      "Key Prefix": "4NC",
      "Object Type": "LightningServiceMetrics"
    },
    {
      "Key Prefix": "4ND",
      "Object Type": "UtilityBarMetrics"
    },
    {
      "Key Prefix": "4NW",
      "Object Type": "NetworkPCustDailyLoginMetrics"
    },
    {
      "Key Prefix": "4V3",
      "Object Type": "WarrantyTerm"
    },
    {
      "Key Prefix": "4Wz",
      "Object Type": "Package2UpgradeExport"
    },
    {
      "Key Prefix": "4XF",
      "Object Type": "BatchApexErrorEventBatchJobId"
    },
    {
      "Key Prefix": "4YL",
      "Object Type": "Image"
    },
    {
      "Key Prefix": "4Zu",
      "Object Type": "AnimationRule"
    },
    {
      "Key Prefix": "4ci",
      "Object Type": "CompactLayoutItemInfo"
    },
    {
      "Key Prefix": "4cl",
      "Object Type": "CompactLayoutInfo"
    },
    {
      "Key Prefix": "4co",
      "Object Type": "SearchLayout"
    },
    {
      "Key Prefix": "4dt",
      "Object Type": "DataType"
    },
    {
      "Key Prefix": "4fe",
      "Object Type": "FieldDefinition"
    },
    {
      "Key Prefix": "4fp",
      "Object Type": "UserFieldAccess"
    },
    {
      "Key Prefix": "4ft",
      "Object Type": "ServiceFieldDataType"
    },
    {
      "Key Prefix": "4hy",
      "Object Type": "MyDomainDiscoverableLogin"
    },
    {
      "Key Prefix": "4ie",
      "Object Type": "EntityDefinition"
    },
    {
      "Key Prefix": "4nK",
      "Object Type": "AssetStatePeriod"
    },
    {
      "Key Prefix": "4nL",
      "Object Type": "AssetAction"
    },
    {
      "Key Prefix": "4nM",
      "Object Type": "AssetActionSource"
    },
    {
      "Key Prefix": "4pb",
      "Object Type": "Publisher"
    },
    {
      "Key Prefix": "4pv",
      "Object Type": "PicklistValueInfo"
    },
    {
      "Key Prefix": "4sr",
      "Object Type": "Service"
    },
    {
      "Key Prefix": "4st",
      "Object Type": "ServiceDataType"
    },
    {
      "Key Prefix": "4sv",
      "Object Type": "ServiceVersion"
    },
    {
      "Key Prefix": "4v2",
      "Object Type": "ProcessExceptionEvent"
    },
    {
      "Key Prefix": "4ve",
      "Object Type": "ApexPageInfo"
    },
    {
      "Key Prefix": "4ws",
      "Object Type": "WebServiceDefinition"
    },
    {
      "Key Prefix": "4wt",
      "Object Type": "WsdlDataType"
    },
    {
      "Key Prefix": "4xo",
      "Object Type": "AssetWarranty"
    },
    {
      "Key Prefix": "4xs",
      "Object Type": "XmlSchema"
    },
    {
      "Key Prefix": "500",
      "Object Type": "Case"
    },
    {
      "Key Prefix": "501",
      "Object Type": "Solution"
    },
    {
      "Key Prefix": "50g",
      "Object Type": "CreditMemo"
    },
    {
      "Key Prefix": "50r",
      "Object Type": "ApiTask"
    },
    {
      "Key Prefix": "550",
      "Object Type": "Entitlement"
    },
    {
      "Key Prefix": "551",
      "Object Type": "EntitlementTemplate"
    },
    {
      "Key Prefix": "552",
      "Object Type": "SlaProcess"
    },
    {
      "Key Prefix": "553",
      "Object Type": "Milestone"
    },
    {
      "Key Prefix": "554",
      "Object Type": "SlaProcessFilter"
    },
    {
      "Key Prefix": "555",
      "Object Type": "CaseMilestone"
    },
    {
      "Key Prefix": "556",
      "Object Type": "SlaProcessFilterItem"
    },
    {
      "Key Prefix": "557",
      "Object Type": "MilestoneType"
    },
    {
      "Key Prefix": "558",
      "Object Type": "MilestoneCondition"
    },
    {
      "Key Prefix": "559",
      "Object Type": "MilestoneTimeTrigger"
    },
    {
      "Key Prefix": "560",
      "Object Type": "MilestoneTimeAction"
    },
    {
      "Key Prefix": "561",
      "Object Type": "MilestoneSuccessAction"
    },
    {
      "Key Prefix": "562",
      "Object Type": "TimeStop"
    },
    {
      "Key Prefix": "563",
      "Object Type": "SlaProcessPushRule"
    },
    {
      "Key Prefix": "570",
      "Object Type": "LiveChatTranscript"
    },
    {
      "Key Prefix": "571",
      "Object Type": "LiveChatVisitor"
    },
    {
      "Key Prefix": "572",
      "Object Type": "LiveChatDeployment"
    },
    {
      "Key Prefix": "573",
      "Object Type": "LiveChatButton"
    },
    {
      "Key Prefix": "574",
      "Object Type": "QuickText"
    },
    {
      "Key Prefix": "577",
      "Object Type": "ConversationContextEntry"
    },
    {
      "Key Prefix": "5CS",
      "Object Type": "ChatSession"
    },
    {
      "Key Prefix": "5H0",
      "Object Type": "ActiveProfileMetric"
    },
    {
      "Key Prefix": "5H1",
      "Object Type": "ActivePermSetLicenseMetric"
    },
    {
      "Key Prefix": "5H2",
      "Object Type": "ActiveFeatureLicenseMetric"
    },
    {
      "Key Prefix": "5LH",
      "Object Type": "BriefcaseAssignment"
    },
    {
      "Key Prefix": "5ML",
      "Object Type": "MacroUsage"
    },
    {
      "Key Prefix": "5OU",
      "Object Type": "ManagedContentVersion"
    },
    {
      "Key Prefix": "5Pa",
      "Object Type": "SessionPermSetActivation"
    },
    {
      "Key Prefix": "5QL",
      "Object Type": "QuickTextUsage"
    },
    {
      "Key Prefix": "5Sp",
      "Object Type": "SegmentSpace"
    },
    {
      "Key Prefix": "5TV",
      "Object Type": "InvoiceLine"
    },
    {
      "Key Prefix": "5Uj",
      "Object Type": "ProductWarrantyTerm"
    },
    {
      "Key Prefix": "600",
      "Object Type": "BILLING_DIVISION"
    },
    {
      "Key Prefix": "601",
      "Object Type": "BILLING_ORDER"
    },
    {
      "Key Prefix": "602",
      "Object Type": "CURRENCY"
    },
    {
      "Key Prefix": "604",
      "Object Type": "PLAN"
    },
    {
      "Key Prefix": "605",
      "Object Type": "PRODUCT"
    },
    {
      "Key Prefix": "606",
      "Object Type": "BILLING_ORDER_ITEM"
    },
    {
      "Key Prefix": "607",
      "Object Type": "PLAN_PRODUCT"
    },
    {
      "Key Prefix": "608",
      "Object Type": "ForecastShare"
    },
    {
      "Key Prefix": "625",
      "Object Type": "ProcessPalette"
    },
    {
      "Key Prefix": "62C",
      "Object Type": "LightningUsageByAppTypeMetrics"
    },
    {
      "Key Prefix": "6AA",
      "Object Type": "AssociationQueueItem"
    },
    {
      "Key Prefix": "6AB",
      "Object Type": "EventAssociationItem"
    },
    {
      "Key Prefix": "6AC",
      "Object Type": "MailAssociationItem"
    },
    {
      "Key Prefix": "6AD",
      "Object Type": "TaskAssociationItem"
    },
    {
      "Key Prefix": "6At",
      "Object Type": "PersonalizationTargetInfo"
    },
    {
      "Key Prefix": "6Au",
      "Object Type": "Audience"
    },
    {
      "Key Prefix": "6BX",
      "Object Type": "AIDataDefinition"
    },
    {
      "Key Prefix": "6EB",
      "Object Type": "EngagementHistoryRollup"
    },
    {
      "Key Prefix": "6S9",
      "Object Type": "AIApplicationConfig"
    },
    {
      "Key Prefix": "6SS",
      "Object Type": "SegmentSpaceChunk"
    },
    {
      "Key Prefix": "6TS",
      "Object Type": "IframeWhiteListUrl"
    },
    {
      "Key Prefix": "6ZC",
      "Object Type": "DashboardComponentReference"
    },
    {
      "Key Prefix": "6.00E+08",
      "Object Type": "MLField"
    },
    {
      "Key Prefix": "6f3",
      "Object Type": "InteractionSteppedStageItem"
    },
    {
      "Key Prefix": "6g5",
      "Object Type": "ExpenseReport"
    },
    {
      "Key Prefix": "6gt",
      "Object Type": "MLPredictionDefinition"
    },
    {
      "Key Prefix": "6mX",
      "Object Type": "OrgMetricScanSummary"
    },
    {
      "Key Prefix": "6pS",
      "Object Type": "PartitionStatus"
    },
    {
      "Key Prefix": "700",
      "Object Type": "MetadataChangeTemplate"
    },
    {
      "Key Prefix": "701",
      "Object Type": "Campaign"
    },
    {
      "Key Prefix": "707",
      "Object Type": "AsyncApexJob"
    },
    {
      "Key Prefix": "708",
      "Object Type": "BatchApexRelationship"
    },
    {
      "Key Prefix": "709",
      "Object Type": "ApexTestQueueItem"
    },
    {
      "Key Prefix": "70a",
      "Object Type": "AssetShare"
    },
    {
      "Key Prefix": "70b",
      "Object Type": "AssetOwnerSharingRule"
    },
    {
      "Key Prefix": "70c",
      "Object Type": "AssetCriteriaSharingRule"
    },
    {
      "Key Prefix": "70d",
      "Object Type": "AssetSharingRuleFilterItem"
    },
    {
      "Key Prefix": "710",
      "Object Type": "LoginIp"
    },
    {
      "Key Prefix": "711",
      "Object Type": "ApiLoginKey"
    },
    {
      "Key Prefix": "712",
      "Object Type": "LoginIpEmail"
    },
    {
      "Key Prefix": "713",
      "Object Type": "ClientBrowser"
    },
    {
      "Key Prefix": "714",
      "Object Type": "ApexCodeCoverage"
    },
    {
      "Key Prefix": "715",
      "Object Type": "ApexCodeCoverageAggregate"
    },
    {
      "Key Prefix": "716",
      "Object Type": "ApexOrgWideCoverage"
    },
    {
      "Key Prefix": "729",
      "Object Type": "Photo"
    },
    {
      "Key Prefix": "737",
      "Object Type": "FieldHistory"
    },
    {
      "Key Prefix": "750",
      "Object Type": "AsyncApiJob"
    },
    {
      "Key Prefix": "751",
      "Object Type": "AsyncApiBatch"
    },
    {
      "Key Prefix": "752",
      "Object Type": "AsyncApiQueryResult"
    },
    {
      "Key Prefix": "753",
      "Object Type": "TempStore"
    },
    {
      "Key Prefix": "754",
      "Object Type": "AsyncApiJobOptions"
    },
    {
      "Key Prefix": "766",
      "Object Type": "UiStyleDefinition"
    },
    {
      "Key Prefix": "777",
      "Object Type": "UiStyle"
    },
    {
      "Key Prefix": "7Ce",
      "Object Type": "DataflowTrigger"
    },
    {
      "Key Prefix": "7EL",
      "Object Type": "SoftLimitsApiUsageMetrics"
    },
    {
      "Key Prefix": "7Eh",
      "Object Type": "LinkedInLeadGen"
    },
    {
      "Key Prefix": "7Eq",
      "Object Type": "LeadConvertMapping"
    },
    {
      "Key Prefix": "7Er",
      "Object Type": "LightningComponentTarget"
    },
    {
      "Key Prefix": "7FG",
      "Object Type": "ManagedContentTypeSearchBlackList"
    },
    {
      "Key Prefix": "7MM",
      "Object Type": "LightningOnboardingConfig"
    },
    {
      "Key Prefix": "7dR",
      "Object Type": "LearningContent"
    },
    {
      "Key Prefix": "7dl",
      "Object Type": "DebugLevel"
    },
    {
      "Key Prefix": "7fc",
      "Object Type": "MaintenanceWorkRule"
    },
    {
      "Key Prefix": "7iv",
      "Object Type": "SoftwareProduct"
    },
    {
      "Key Prefix": "7ov",
      "Object Type": "NetworkDiscoverableLogin"
    },
    {
      "Key Prefix": "7pV",
      "Object Type": "LightningUsageByFlexiPageMetrics"
    },
    {
      "Key Prefix": "7tf",
      "Object Type": "TraceFlag"
    },
    {
      "Key Prefix": "7tg",
      "Object Type": "S2XGoogleServiceAccount"
    },
    {
      "Key Prefix": "7ud",
      "Object Type": "OauthCustomScope"
    },
    {
      "Key Prefix": "7ue",
      "Object Type": "OauthCustomScopeApp"
    },
    {
      "Key Prefix": "800",
      "Object Type": "Contract"
    },
    {
      "Key Prefix": "801",
      "Object Type": "Order"
    },
    {
      "Key Prefix": "802",
      "Object Type": "OrderItem"
    },
    {
      "Key Prefix": "803",
      "Object Type": "INVOICE"
    },
    {
      "Key Prefix": "804",
      "Object Type": "INVOICE_ITEM"
    },
    {
      "Key Prefix": "805",
      "Object Type": "PAYMENT"
    },
    {
      "Key Prefix": "806",
      "Object Type": "Approval"
    },
    {
      "Key Prefix": "807",
      "Object Type": "URI_BLOCK_RULE"
    },
    {
      "Key Prefix": "80D",
      "Object Type": "OrganizationValue"
    },
    {
      "Key Prefix": "810",
      "Object Type": "ServiceContract"
    },
    {
      "Key Prefix": "811",
      "Object Type": "ContractLineItem"
    },
    {
      "Key Prefix": "817",
      "Object Type": "S2XTransaction"
    },
    {
      "Key Prefix": "820",
      "Object Type": "S2XRecordMap"
    },
    {
      "Key Prefix": "822",
      "Object Type": "S2XUserMap"
    },
    {
      "Key Prefix": "823",
      "Object Type": "S2XServiceAccount"
    },
    {
      "Key Prefix": "824",
      "Object Type": "S2XTransactionLock"
    },
    {
      "Key Prefix": "825",
      "Object Type": "S2XEventRecordMap"
    },
    {
      "Key Prefix": "828",
      "Object Type": "ActivityRecurrence2"
    },
    {
      "Key Prefix": "829",
      "Object Type": "ActivityExtension"
    },
    {
      "Key Prefix": "82B",
      "Object Type": "ActivityRecurrence2Exception"
    },
    {
      "Key Prefix": "873",
      "Object Type": "MLModel"
    },
    {
      "Key Prefix": "874",
      "Object Type": "MLModelMetric"
    },
    {
      "Key Prefix": "876",
      "Object Type": "MLModelFactor"
    },
    {
      "Key Prefix": "877",
      "Object Type": "MLModelFactorComponent"
    },
    {
      "Key Prefix": "886",
      "Object Type": "OauthClientRegistration"
    },
    {
      "Key Prefix": "888",
      "Object Type": "OauthConsumer"
    },
    {
      "Key Prefix": "889",
      "Object Type": "OauthConsumerAsset"
    },
    {
      "Key Prefix": "8BM",
      "Object Type": "ExpressionFilterCriteria"
    },
    {
      "Key Prefix": "8D3",
      "Object Type": "RevenueElement"
    },
    {
      "Key Prefix": "8GR",
      "Object Type": "CareDeterminant"
    },
    {
      "Key Prefix": "8Kk",
      "Object Type": "PlatformEventUsageMetric"
    },
    {
      "Key Prefix": "8Z7",
      "Object Type": "AlternativePaymentMethod"
    },
    {
      "Key Prefix": "8dy",
      "Object Type": "MetricsInMQMetrics"
    },
    {
      "Key Prefix": "8gZ",
      "Object Type": "FlowInterviewLog"
    },
    {
      "Key Prefix": "8gt",
      "Object Type": "MLFilter"
    },
    {
      "Key Prefix": "8lW",
      "Object Type": "ContactPointAddress"
    },
    {
      "Key Prefix": "8wk",
      "Object Type": "DashboardSavedView"
    },
    {
      "Key Prefix": "8yy",
      "Object Type": "ApexTestRunResultMetrics"
    },
    {
      "Key Prefix": "906",
      "Object Type": "Question"
    },
    {
      "Key Prefix": "907",
      "Object Type": "Reply"
    },
    {
      "Key Prefix": "910",
      "Object Type": "QuestionSubscription"
    },
    {
      "Key Prefix": "911",
      "Object Type": "QuestionReportAbuse"
    },
    {
      "Key Prefix": "912",
      "Object Type": "ReplyReportAbuse"
    },
    {
      "Key Prefix": "918",
      "Object Type": "ChatterServiceSiteSetting"
    },
    {
      "Key Prefix": "99Q",
      "Object Type": "LearningRank"
    },
    {
      "Key Prefix": "9BV",
      "Object Type": "PackageBooleanValue"
    },
    {
      "Key Prefix": "9D9",
      "Object Type": "CustomObjTeamMemberMetric"
    },
    {
      "Key Prefix": "9DV",
      "Object Type": "PackageDateValue"
    },
    {
      "Key Prefix": "9EW",
      "Object Type": "IotActivityLog"
    },
    {
      "Key Prefix": "9EZ",
      "Object Type": "IoTActivityLogEvent"
    },
    {
      "Key Prefix": "9NV",
      "Object Type": "PackageIntegerValue"
    },
    {
      "Key Prefix": "9Pt",
      "Object Type": "ManagedContentNodeRefTree"
    },
    {
      "Key Prefix": "9Pu",
      "Object Type": "ManagedContentSpaceFolder"
    },
    {
      "Key Prefix": "9Px",
      "Object Type": "ManagedContentSpaceFolderMember"
    },
    {
      "Key Prefix": "9Py",
      "Object Type": "ManagedContentFolderLink"
    },
    {
      "Key Prefix": "9UX",
      "Object Type": "OrgDomainLog"
    },
    {
      "Key Prefix": "9V6",
      "Object Type": "RedirectWhitelistUrl"
    },
    {
      "Key Prefix": "9Vl",
      "Object Type": "ContactPointEmail"
    },
    {
      "Key Prefix": "9XN",
      "Object Type": "GenericContentFolderMember"
    },
    {
      "Key Prefix": "9XP",
      "Object Type": "GenericContentFolder"
    },
    {
      "Key Prefix": "9:00 AM",
      "Object Type": "OrgMetricScanResult"
    },
    {
      "Key Prefix": "9bq",
      "Object Type": "AIInsightFeedback"
    },
    {
      "Key Prefix": "9gd",
      "Object Type": "ServiceSetupProvisioning"
    },
    {
      "Key Prefix": "9jr",
      "Object Type": "StrategyMonthlyStats"
    },
    {
      "Key Prefix": "9qb",
      "Object Type": "AIRecordInsight"
    },
    {
      "Key Prefix": "9qc",
      "Object Type": "AIInsightValue"
    },
    {
      "Key Prefix": "9qd",
      "Object Type": "AIInsightAction"
    },
    {
      "Key Prefix": "9s4",
      "Object Type": "IPAddressRange"
    },
    {
      "Key Prefix": "9s9",
      "Object Type": "InteractionCollSortOption"
    },
    {
      "Key Prefix": "9ss",
      "Object Type": "InteractionSteppedStage"
    },
    {
      "Key Prefix": "9tv",
      "Object Type": "PaymentAuthAdjustment"
    },
    {
      "Key Prefix": "9xb",
      "Object Type": "GenericContentFolderItem"
    },
    {
      "Key Prefix": "9xc",
      "Object Type": "AIInsightSource"
    },
    {
      "Key Prefix": "9yZ",
      "Object Type": "LicenseManagementOrgCertificate"
    },
    {
      "Key Prefix": "9yx",
      "Object Type": "CreditMemoLine"
    },
    {
      "Key Prefix": "9zO",
      "Object Type": "MLMigration"
    },
    {
      "Key Prefix": "9zx",
      "Object Type": "PaymentGroup"
    },
    {
      "Key Prefix": "9zz",
      "Object Type": "SqlInfoPfes"
    },
    {
      "Key Prefix": "a00",
      "Object Type": "CustomObjects"
    },
    {
      "Key Prefix": "e00",
      "Object Type": "PlatformEvents"
    },
    {
      "Key Prefix": "h00",
      "Object Type": "HistoricalTrending"
    },
    {
      "Key Prefix": "kA#",
      "Object Type": "KnowledgeArticle"
    },
    {
      "Key Prefix": "ka#",
      "Object Type": "KnowledgeArticleVersion"
    },
    {
      "Key Prefix": "ka0",
      "Object Type": "Article"
    },
    {
      "Key Prefix": "m00",
      "Object Type": "CustomMetadata"
    },
    {
      "Key Prefix": "z00",
      "Object Type": "BigObjects"
    },
    {
      "Key Prefix": "X00",
      "Object Type": "PermissionSet Name"
    },
    {
      "Key Prefix": "CF00N",
      "Object Type": "Custom Field Id used in the query string."
    }
   ]
   
   // Create Map directly from obj array using map function
   const recordIdSobjectType = new Map(keyPrefixObjectArray.map(item => [item["Key Prefix"], item["Object Type"]]));
   
   // Create another Map with swapped key-value pairs
   const objectRecordIdStartChar = new Map(keyPrefixObjectArray.map(item => [item["Object Type"], item["Key Prefix"]]));
   
   console.log(recordIdSobjectType.get("00D"));
   console.log(objectRecordIdStartChar.get("User"));
   
  
  const searchInput = document.getElementById("searchInput");
  const outputDiv = document.getElementById("output");
  
  let timeoutId = null; // Variable to store the timeout
  const timeOutTime = 0.1 // Timeout time in seconds
  
  searchInput.addEventListener("input", () => {
    // Clear any previous timeout
    clearTimeout(timeoutId);
  
    // Set a new timeout to trigger search after 100ms of user stopping typing
    timeoutId = setTimeout(() => {
      //If input is blank nothing should appear in output
      if(searchInput.value==""){
          outputDiv.textContent = "";
      }
      const searchValue = searchInput.value.slice(0, 3);
      let foundMap = null;
      let foundValue = null;
  
      if (recordIdSobjectType.has(searchValue)) {
        foundMap = "recordIdSobjectType";
        foundValue = recordIdSobjectType.get(searchValue);
      } else if (objectRecordIdStartChar.has(searchInput.value)) {
        foundMap = "objectRecordIdStartChar";
        foundValue = objectRecordIdStartChar.get(searchInput.value);
      }

      if(foundMap=="recordIdSobjectType" && searchInput.value){
        outputDiv.textContent = `Object is : ${foundValue}`;
      }
      else if(foundMap=="objectRecordIdStartChar"&& searchInput.value){
        outputDiv.textContent = `Record Id starts with : ${foundValue}`;
      }
      else{
          outputDiv.textContent = "Provide a valid input";
      }
    }, timeOutTime*1000);
  });
  