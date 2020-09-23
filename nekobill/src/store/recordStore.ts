import recordListmodel from '@/models/recordList';

export default{
     //record stroe
  recordList:recordListmodel.fetch(),
  createRecord : (record: RecordItem) =>recordListmodel.create(record),
}