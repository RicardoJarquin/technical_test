<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $tasks = Task::query();
        if($request->search){
            $tasks->where('title', 'like', '%'.$request->search.'%');
        }
        if($request->user_id){
            $tasks->where('userId',$request->user_id);
        }
        if($request->completed){
            $tasks->where('completed',$request->completed);
        }
        if($request->per_page){
            return $tasks->paginate($request->per_page);
        }
        return $tasks->get();
    }
}
