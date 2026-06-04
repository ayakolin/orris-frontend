import type {
  AgentRuleSyncStatus,
  CreateForwardRuleRequest,
  CreateSubscriptionForwardRuleRequest,
  ForwardRule,
  RuleSyncStatusItem,
  UpdateForwardRuleRequest,
  UpdateSubscriptionForwardRuleRequest,
} from './types';

const rule: ForwardRule = {
  id: 'fr_test',
  agentId: 'fa_test',
  ruleType: 'direct',
  name: 'test',
  listenPort: 8080,
  listenIp: '127.0.0.1',
  ipVersion: 'auto',
  protocol: 'tcp',
  status: 'enabled',
  remark: '',
  uploadBytes: 0,
  downloadBytes: 0,
  totalBytes: 0,
  createdAt: '2026-06-04T00:00:00Z',
  updatedAt: '2026-06-04T00:00:00Z',
  effectiveTrafficMultiplier: 1,
  nodeCount: 1,
  isAutoMultiplier: true,
  sortOrder: 0,
};

const createRequest: CreateForwardRuleRequest = {
  agentId: 'fa_test',
  ruleType: 'direct',
  name: 'test',
  listenIp: '127.0.0.1',
};

const updateRequest: UpdateForwardRuleRequest = {
  listenIp: '',
};

const syncStatus: RuleSyncStatusItem = {
  ruleId: 'fr_test',
  syncStatus: 'synced',
  runStatus: 'running',
  listenIp: '127.0.0.1',
  listenPort: 8080,
  connections: 0,
  errorMessage: '',
  syncedAt: 0,
};

const agentStatus: AgentRuleSyncStatus = {
  agentId: 'fa_test',
  agentName: 'agent',
  position: 0,
  syncStatus: 'synced',
  runStatus: 'running',
  listenIp: '127.0.0.1',
  listenPort: 8080,
  connections: 0,
  errorMessage: '',
  syncedAt: 0,
};

const createSubscriptionRequest: CreateSubscriptionForwardRuleRequest = {
  agentId: 'fa_test',
  ruleType: 'direct',
  name: 'test',
  listenIp: '127.0.0.1',
  protocol: 'tcp',
};

const updateSubscriptionRequest: UpdateSubscriptionForwardRuleRequest = {
  listenIp: '',
};

void [
  rule,
  createRequest,
  updateRequest,
  syncStatus,
  agentStatus,
  createSubscriptionRequest,
  updateSubscriptionRequest,
];
