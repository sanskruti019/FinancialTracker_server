import express, {Request, Response} from "express";
import FinanchialRecordModel from "../schema/financhial-record";
//writing api
const router = express.Router();
//to get data of record of user
router.get("/getAllByUserID/:userId", async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId;
      const records = await FinanchialRecordModel.find({ userId: userId });
      if (records.length === 0) {
        return res.status(404).send("No records found for the user.");
      }
      res.status(200).send(records);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  //to add new record to database

  router.post("/", async (req: Request, res: Response) => {
    try {
      const newRecordBody = req.body;
      const newRecord = new FinanchialRecordModel(newRecordBody);
      const savedRecord = await newRecord.save();
  
      res.status(200).send(savedRecord);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  //to manually make changes to the entries of record

  router.put("/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const newRecordBody = req.body;
      const record = await FinanchialRecordModel.findByIdAndUpdate(
        id,
        newRecordBody,
        { new: true }
      );
  
      if (!record) return res.status(404).send();
  
      res.status(200).send(record);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  //to delete
  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const record = await FinanchialRecordModel.findByIdAndDelete(id);
      if (!record) return res.status(404).send();
      res.status(200).send(record);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  
export default router;