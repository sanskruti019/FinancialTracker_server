import mongoose from 'mongoose'
//in mongoose
interface FinanchialRecord{
    userId: string;
    date:Date;
    description: string;
    amount: number;
    category:string;
    paymentMethod:string;
}

const financhialRecordSchema = new mongoose.Schema<FinanchialRecord>({
//in mongodb
userId:{type:String , required:true},
date:{type:Date , required:true},
description:{type:String , required:true},
amount:{type:Number , required:true},
category:{type:String , required:true},
paymentMethod:{type:String , required:true},

});

const FinanchialRecordModel = mongoose.model<FinanchialRecord>(
    "FinanchialRecord",financhialRecordSchema
);

export default FinanchialRecordModel;