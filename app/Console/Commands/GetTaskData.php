<?php

namespace App\Console\Commands;

use App\Models\Task;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class GetTaskData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get_task_data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to get tasks data';

    private const URL = 'https://jsonplaceholder.typicode.com/todos';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $response = Http::get(self::URL);
        $response = $response->json();
        foreach($response as $task){
            $newTask = new Task();
            $newTask->userId = $task['userId'];
            $newTask->title = $task['title'];
            $newTask->completed = $task['completed'];
            $newTask->save();
        }
        return 0;
    }
}
