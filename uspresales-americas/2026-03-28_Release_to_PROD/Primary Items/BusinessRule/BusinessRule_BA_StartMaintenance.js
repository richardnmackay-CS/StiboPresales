/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_StartMaintenance",
  "type" : "BusinessAction",
  "setupGroups" : [ "BassProShopRules" ],
  "name" : "BA_StartMaintenance",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "web",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "step",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,web,step) {
var instance = node.getWorkflowInstanceByID("SalesItemOnboarding_WF");
if(!instance){
	node.startWorkflowByID("SalesItemOnboarding_WF", "Starting Maintenance Workflow");
}

var state = step.getWorkflowHome().getWorkflowByID("SalesItemOnboarding_WF").getStateByID("InitialEnrichment_SIO");
//log.info(state.getID())
web.navigate("", node, state);

}