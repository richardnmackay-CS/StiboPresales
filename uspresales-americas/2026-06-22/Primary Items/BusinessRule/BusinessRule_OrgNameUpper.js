/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "OrgNameUpper",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Concatenate Org Name City Zip (UPPER)",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "OrganizationCustomer" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "BulkUpdateSetName",
  "parameters" : [ {
    "id" : "Formula",
    "type" : "java.lang.String",
    "value" : "Trim(concatenate(upper(value('LegalName')), ' - ',\nlist(iterate(datacontainers('MainAddressDataContainer'),'list(multivalue2list(upper(value(\"StandardizedCity\"))),\" , \")'),', '),\" - \",\nlist(iterate(datacontainers('MainAddressDataContainer'),'list(multivalue2list(upper(value(\\\"StandardizedZip\"))),\" , \")'),', ')\n))"
  }, {
    "id" : "Value",
    "type" : "java.lang.String",
    "value" : ""
  } ],
  "pluginType" : "Operation"
}
*/
