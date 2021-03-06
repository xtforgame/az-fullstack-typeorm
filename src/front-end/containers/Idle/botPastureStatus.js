export default {
  status: {
    bots: [
      {
        name: 'backup-bot',
        botInfo: {
          memoryLimit: 8,
          storage: 8388608,
          storageLimit: 8388608,
          procTime: 360000,
          procTimeLimit: 360000,
          bandwidth: 900,
          bandwidthLimit: 900,
          feature: 10,
          featureLimit: 10,
        },
        cpuTime: [
          0,
          8125966,
        ],
        wallTime: [
          0,
          8125966,
        ],
        heapStatistics: {
          total_heap_size: 3440640,
          total_heap_size_executable: 1048576,
          total_physical_size: 1291384,
          total_available_size: 10035728,
          used_heap_size: 1206392,
          heap_size_limit: 12936949,
          malloced_memory: 8192,
          peak_malloced_memory: 158264,
          does_zap_garbage: 0,
          externally_allocated_size: 16389,
        },
      },
    ],
    resources: {
      food: {
        value: 796,
        delta: 50,
        max: 1000,
      },
      wood: {
        value: 948,
        delta: 50,
        max: 1000,
      },
      rock: {
        value: 50,
        delta: 50,
        max: 1000,
      },
      metal: {
        value: 178,
        delta: 50,
        max: 1000,
      },
    },
    schedules: [
      {
        id: 1,
        title: 'Backup Check',
        args: [],
        taskMap: {
          1: 0,
          2: 1,
          3: 2,
          4: 3,
          5: 4,
          6: 5,
        },
        executor: {
          id: 'backup-bot',
          name: 'Backup Bot',
        },
        creator: {
          id: 'backup-bot',
          name: 'Backup Bot',
        },
        timeTrigger: 1535079731950,
        nextScheduledTime: 1535079731950,
        createdTime: 1535079331953,
        steps: [
          {
            id: 1,
            title: 'Get standbys info',
            args: [],
            state: 'failed',
            completed: false,
            error: {
              message: 'request error',
              detail: {
                code: 'CERT_HAS_EXPIRED',
              },
            },
            url: 'http://example.com/standbys',
            content: 'get http://example.com/standbys',
          },
          {
            id: 2,
            title: 'Check ssh connection',
            args: [],
            state: 'pending',
            completed: false,
            url: 'http://example.com/ssh',
            content: 'get http://example.com/ssh',
          },
          {
            id: 3,
            title: 'Get pgBackrest info',
            args: [],
            state: 'pending',
            completed: false,
            url: 'http://example.com/info',
            content: 'get http://example.com/info',
          },
          {
            id: 4,
            title: 'Create Stanza',
            args: [],
            state: 'pending',
            completed: false,
            url: 'http://example.com/create-stanza',
            content: 'get http://example.com/create-stanza',
          },
          {
            id: 5,
            title: 'Create the first backup',
            args: [],
            state: 'pending',
            completed: false,
            url: 'http://example.com/backup',
            content: 'get http://example.com/backup',
          },
          {
            id: 6,
            title: 'Start standby servers',
            args: [],
            state: 'pending',
            completed: false,
            url: 'http://example.com/start-standby',
            content: 'get http://example.com/start-standby',
          },
        ],
        finished: false,
      },
    ],
  },
};
