<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\employee;
class EmployeeController extends Controller
{
    //
    public function getemployee(){
        return response()->json(employee::all(),200);
    }
    public function getemployeeById($id){
        $employee =employee::find($id);
        if(is_null($employee)){
            return response()->json(['message'=>'employee not found'],404);
        }
        return response()->json(employee::find($id),200);
    }    
    public function addemployee(Request $request){
        $employee =employee::create($request->all());
        return response($employee,201);
    }
    public function updateemployee(Request $request,$id){
        $employee =employee::find($id);
        if(is_null($employee)){
            return response()->json(['message'=>'employee not found'],404);
        }
        $employee->update($request->all());
        return response($employee,201);
    }
    public function suppremployee(Request $request,$id){
        $employee =employee::find($id);
        if(is_null($employee)){
            return response()->json(['message'=>'employee not found'],404);
        }
        $employee->delete();
        return response($employee,204);
    }

}
