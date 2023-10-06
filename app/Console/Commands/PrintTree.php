<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class PrintTree extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'print_tree';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to print tree';

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
    public function handle(): void
    {
        echo str_repeat(' ', 10 - 1) . "*\n";

        for ($i = 1; $i <= 10; $i++) {
            echo str_repeat(' ', 10 - $i);
            echo str_repeat('0', ($i * 2) - 1) . "\n";
        }
    }
}
